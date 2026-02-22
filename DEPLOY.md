# Deploy Fit Band to www.buyfitband.com

Follow these steps to host your app and connect your Namecheap domain.

---

## Part 1: Hosting (Vercel)

### 1.1 Push your code to GitHub (if not already)

1. Create a new repository at [github.com/new](https://github.com/new) (e.g. `fit-band` or `buyfitband`).
2. In your project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name.

### 1.2 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use “Continue with GitHub”).
2. Click **Add New…** → **Project**.
3. **Import** your GitHub repository (the one you pushed in 1.1).
4. Leave the defaults:
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Wait for the build to finish.
6. You’ll get a URL like `your-project.vercel.app`. Open it to confirm the site works.

---

## Part 2: Custom domain on Vercel

### 2.1 Add your domain in Vercel

1. In Vercel, open your project.
2. Go to **Settings** → **Domains**.
3. Under “Domain”, type: **www.buyfitband.com**
4. Click **Add**.
5. Vercel will show you DNS instructions. You’ll typically see something like:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | CNAME | www  | cname.vercel-dns.com     |

   (The exact “Value” might be your project’s Vercel URL; use what Vercel shows.)

6. Optionally add **buyfitband.com** (without www) and follow Vercel’s instructions for the root domain (often an A record to `76.76.21.21` or a CNAME to `cname.vercel-dns.com`).

Keep the Vercel “Domains” tab open; you’ll come back to check when DNS is set.

---

## Part 3: DNS in Namecheap

### 3.1 Log in to Namecheap

1. Go to [namecheap.com](https://www.namecheap.com) and sign in.
2. Open **Domain List** and click **Manage** next to **buyfitband.com**.

### 3.2 Edit DNS records

1. Go to the **Advanced DNS** tab.
2. Remove or don’t use conflicting records:
   - If there is a **URL Redirect** or **CNAME** for `www` pointing elsewhere, remove it or we’ll replace it.
3. Add the record Vercel asked for for **www**:

   - Click **Add New Record**.
   - **Type:** CNAME  
   - **Host:** `www`  
   - **Value:** exactly what Vercel showed (e.g. `cname.vercel-dns.com` or your project’s Vercel domain).  
   - **TTL:** Automatic (or 300).  
   - Save.

4. (Optional) To have **buyfitband.com** (no www) open your site, use what Vercel says for the root domain, for example:

   - **A Record**  
     - **Host:** `@`  
     - **Value:** `76.76.21.21`  
     (Use the IP Vercel gives you if it’s different.)

   Or if Vercel asks for a CNAME for the root:

   - **CNAME**  
     - **Host:** `@`  
     - **Value:** `cname.vercel-dns.com`  
   (Some registrars require a “flattened” CNAME; Namecheap may show a different setup. Follow Vercel’s exact text.)

5. Click **Save** (or **Save all changes**).

### 3.3 Wait for DNS

- Propagation usually takes **5–30 minutes**, sometimes up to 24–48 hours.
- In Vercel → **Settings** → **Domains**, the domain will show as “Valid Configuration” when DNS is correct.
- Test in the browser: **https://www.buyfitband.com**

---

## Checklist

- [ ] Code pushed to GitHub  
- [ ] Project deployed on Vercel and default URL works  
- [ ] Domain **www.buyfitband.com** added in Vercel  
- [ ] CNAME for `www` added in Namecheap (and optional root record)  
- [ ] Vercel shows “Valid Configuration” for the domain  
- [ ] https://www.buyfitband.com loads your Fit Band app  

---

## Troubleshooting

- **“Invalid configuration” in Vercel**  
  Double-check **Host** and **Value** in Namecheap. Value must have no `https://`, no trailing slash, and no spaces. Wait a bit and refresh the Domains page.

- **Site doesn’t load at www.buyfitband.com**  
  Wait 15–30 minutes and try again. Try in an incognito window. Check [whatsmydns.net](https://www.whatsmydns.net) for `www.buyfitband.com` to see if the CNAME has propagated.

- **SSL certificate**  
  Vercel will issue an HTTPS certificate automatically once DNS is valid. No extra step needed.

If you tell me whether you use only **www** or also **buyfitband.com** (no www), I can narrow the exact Namecheap records to add.
