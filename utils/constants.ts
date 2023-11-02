export const PREFIX = process.env.GITHUB_ACTIONS && !process.env.NEXT_PUBLIC_CUSTOM_DOMAIN
                      ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` 
                      : '';
