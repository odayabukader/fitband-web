
  # Fit Band

  This is a code bundle for Fit Band. The original project is available at https://www.figma.com/design/SkYhnIUTIDI6PeW6ZZ4OgI/Fit-Band.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Custom domain (www.buyfitband.com)

  The app is configured to use **www.buyfitband.com** (title, meta tags, canonical URL). To go live:

  1. **Deploy** the app to a host (e.g. Vercel, Netlify, or your own server).
  2. **In your host’s dashboard**, add the custom domain: `www.buyfitband.com` (and optionally `buyfitband.com`).
  3. **In Namecheap**, point the domain to your host:
     - For **Vercel/Netlify**: they will show you the DNS records (usually a CNAME for `www` to their URL, and often an A/CNAME for the root).
     - Add the CNAME and/or A records they give you in Namecheap’s **Domain List → Manage → Advanced DNS**.
  4. After DNS propagates (up to 48 hours, often sooner), your site will load at www.buyfitband.com.
  