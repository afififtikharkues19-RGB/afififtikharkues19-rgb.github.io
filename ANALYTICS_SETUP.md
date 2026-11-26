# Portfolio visitor analytics — setup and ownership

**Status:** prepared, disabled. No analytics requests are sent until the owner supplies a GoatCounter account code and enables the configuration.

## Activate the integration
1. Register a personal site at https://www.goatcounter.com/signup using an account name you choose and the site domain `afififtikharkues19-rgb.github.io`.
2. Confirm access to your own dashboard. Use its public account name only; never share or commit a password or API token.
3. Edit `assets/analytics.js` and change the `config` object to `{accountCode:"YOUR-ACCOUNT-NAME",enabled:true}`. Replace the example with your real account name. Commit to main and confirm the GitHub Pages deployment succeeds.
4. Open the portfolio in a browser that permits analytics, with local opt-out and privacy signals disabled for the test if you choose. Open several pages and click a DOI, CV link or research-repository link. Check the dashboard for the resulting visits and events.
5. Keep the dashboard private and individual-pageview storage disabled unless there is a clear, justified need to change the setting. Do not add API tokens to public site files.

## What to inspect
- Traffic over time and visit counts (not exact unique human beings).
- Page paths and relative popularity; homepage /index.html is normalized to /.
- Country estimates and referral sources as supported by the configured dashboard.
- Events: click-cv-download, click-research-repository, click-publication-doi. These are link clicks, not confirmed downloads, readership or GitHub repository visits.
- Data are prospective only, and browser blocking, consent/privacy choices, sessions and geographic approximation affect completeness.

The integration uses a shared bootstrap in `assets/theme-switch.js`, `assets/v3.js` and `assets/site.js` plus explicit loading for the CV and World Vision pages. A duplicate-initialization guard prevents double collection. The large sediment-metals page could not be inspected for script coverage through the connector; verify it during the live test. The inactive legacy index_fixed.html page is excluded. The privacy page is not counted. There is no public traffic counter or public country breakdown by default.

## Privacy
Read https://www.goatcounter.com/help/privacy and https://www.goatcounter.com/help/sessions. The website's privacy page provides a browser-local opt-out; the script respects GPC and Do Not Track. For the owner’s own visits, use GoatCounter's documented exclusion options: https://www.goatcounter.com/help/skip-dev. Review applicable notice and consent requirements before enabling analytics.

## Maintenance
Set enabled to false to stop loading the tracker. Keep credentials outside GitHub. Analytics is not required for any existing portfolio feature.
