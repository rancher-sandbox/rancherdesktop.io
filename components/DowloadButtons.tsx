import React,{ useEffect, useState } from 'react'
import axios from 'axios'

export const DownloadButtons = () => {
    // Use 1.10.0 as the fallback version in case something goes wrong fetching the latest release tag name
    const [latestRelease, setLatestRelease] = useState('1.10.0');
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
                <img src="/images/logo-apple.svg" className="w-8 h-8 mx-auto block" alt="apple" />
                <p className="mt-2">
                  <a href={`https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop-${latestRelease}.aarch64.dmg`}>
                    Download for macOS (Apple Silicon) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src="/images/logo-apple.svg" className="w-8 h-8 mx-auto block" alt="apple" />
                <p className="mt-2">
                  <a href={`https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop-${latestRelease}.x86_64.dmg`}>
                    Download for macOS (Intel) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src="/images/logo-windows.svg" className="w-8 h-8 mx-auto block" alt="Windows" />
                <p className="mt-2">
                  <a href={`https://github.com/rancher-sandbox/rancher-desktop/releases/download/v${latestRelease}/Rancher.Desktop.Setup.${latestRelease}.msi`}>
                    Download for Windows (x64) <span className="material-icons"></span>
                  </a>
                </p>
            </div>
            <div className="col-span-1">
                <img src="/images/logo-linux.svg" className="w-8 h-8 mx-auto block" alt="linux" />
                <p className="mt-2">
                  <a href="https://docs.rancherdesktop.io/getting-started/installation#linux">
                    Install on Linux <span className="material-icons"></span>
                  </a>
                </p>
            </div>
          </div>
    );
}
