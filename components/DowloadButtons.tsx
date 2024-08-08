import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { PREFIX } from '@/utils/constants'


export const DownloadButtons = () => {
    const [latestRelease, setLatestRelease] = useState(undefined);
    // If something goes wrong fetching the latest release tag name via the API then
    // fall back to the GitHub releases page
    const fallBackURL = 'https://github.com/rancher-sandbox/rancher-desktop/releases';
    const owner = 'rancher-sandbox';
    const repo = 'rancher-desktop';

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
          .then(response => {
            const { data } = response;
            const releaseName = data.tag_name.slice(1);
            setLatestRelease(releaseName);
          })
          .catch(error => {
            console.error('Error fetching the latest release tag name', error);
          });
      }, []);

    return(
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="col-span-1">
                <img src={`${PREFIX}/images/logo-apple.svg`} className="w-8 h-8 mx-auto block" alt="apple" />
                <p className="mt-2">
                  <a href={latestRelease ? `https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop-${latestRelease}.aarch64.dmg` : fallBackURL}>
                    Download for macOS (Apple Silicon) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src={`${PREFIX}/images/logo-apple.svg`} className="w-8 h-8 mx-auto block" alt="apple" />
                <p className="mt-2">
                  <a href={latestRelease ? `https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop-${latestRelease}.x86_64.dmg` : fallBackURL}>
                    Download for macOS (Intel) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src={`${PREFIX}/images/logo-windows.svg`} className="w-8 h-8 mx-auto block" alt="Windows" />
                <p className="mt-2">
                  <a href={latestRelease ? `https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop.Setup.${latestRelease}.msi` : fallBackURL}>
                    Download for Windows (x64) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src={`${PREFIX}/images/logo-linux.svg`} className="w-8 h-8 mx-auto block" alt="linux" />
                <p className="mt-2">
                  <a href="https://docs.rancherdesktop.io/getting-started/installation#linux">
                    Install on Linux <span className="material-icons"></span>
                  </a>
                </p>
            </div>
          </div>
    );
}
