
# Research Coding Community (RCC) Coding Club Website Template

Welcome! This repository is a **template** for launching your own Research Coding Community Coding Club website using **Jupyter Book**. It includes:

- 📚 A ready-to-edit site structure (home, community pages, resources)
- ✅ Working **GitHub Actions** for CI/CD to **deploy to GitHub Pages**
- 🧩 **Interactive quizzes** via `jupyterquiz` with sample content
- 🧪 Optional **accessibility checks** workflow (Pa11y)
- 🧰 Examples & placeholders only — **no real content**

---

## Quick Start

1. **Create your repo from this template**  
   - On GitHub, click **Use this template** → **Create a new repository**.  
   - Or fork this repo.

2. **Enable GitHub Pages**  
   - Go to **Settings → Pages**.  
   - Set **Source** to **GitHub Actions**.
   - You may also wish to select the tick box under the **About** section of the GitHub repository so that your site’s URL is shown at the top of the repo page.

3. **Edit site config**  
   - Open `_config.yml` and replace the placeholders for `title`, `author`, `repository.url`, and the `logo` path if you change it.

4. **Add or edit content**  
   - Update `home_page.md`.  
   - Edit community pages in `community/`.  
   - Add/modify resources in `resources/`, update `_toc.yml` accordingly.  
   - Try the quiz in `resources/example_resource/example_lesson.ipynb`.

5. **Push to `main`**  
   - GitHub Actions will build and deploy your site automatically.  
   - Your site will be available at: `https://<your-username>.github.io/<your-repo>/`

---

## Repository Structure

```
.
├─ _config.yml                 # Jupyter Book site config (title, logo, repo, etc.)
├─ _toc.yml                    # Table of contents (navigation)
├─ home_page.md                # Landing page
├─ community/                  # Community pages (About, Code of Conduct, Join)
├─ resources/
│  └─ example_resources/
│     ├─ README.md            # Resource overview
│     └─ example_lesson.ipynb # Example notebook with quiz
├─ quizzes/
│  └─ sample_quiz.json        # Example quiz
├─ _static/
│  └─ logo.png                # Placeholder logo (replace with your own)
├─ .github/workflows/
│  ├─ build-book.yml          # Build on PRs to check that site compiles
│  ├─ deploy-book.yml         # Build & deploy to GitHub Pages on push to main
│  └─ accessibility.yml       # Optional: Pa11y accessibility checks
├─ requirements.in            # Python dependencies (pip)
├─ pyproject.toml             # Optional Poetry project
└─ .gitignore
```

---

## Customising the Site

- **Branding:** Replace `_static/logo.png` and set the `logo:` path in `_config.yml`.
- **Theme:** Jupyter Book uses Sphinx Book Theme. You can add custom CSS in `_static/` and reference it in `_config.yml`.
- **Content:** Add new resources in `resources/your_resource/` and include them in `_toc.yml`.

---

## Interactive Quizzes (JupyterQuiz)

1. Put quiz JSON files in `quizzes/`. See `quizzes/sample_quiz.json`.
2. In a notebook, add:

   ```python
   from jupyterquiz import display_quiz
   display_quiz("file/path/filename.json")
   ```

3. When the site builds, quizzes render as interactive widgets in the page.

---

## Local Preview (optional)

```bash
# Using pip
pip install -r requirements.in
jupyter-book build .
# Open _build/html/index.html in your browser

# Or with Poetry
poetry install
poetry run jupyter-book build .
```

---

## Deployment: GitHub Actions → GitHub Pages

- Pushing to `main` triggers the **Deploy** workflow.  
- The workflow builds the Jupyter Book and publishes it to **GitHub Pages**.  
- Check **Actions** for logs if something fails.

> Tip: You can also run the **Build** workflow on pull requests as a smoke test.

---

## Accessibility (optional, recommended)

The `accessibility.yml` workflow runs [Pa11y](https://pa11y.org/) to flag potential accessibility issues. It builds the Jupyter Book, identifies changed pages, and posts an accessibility report as a PR comment.

### Setup

1. **Enable Actions and permissions**
   - Go to **Settings → Actions → General**.
   - Under **Actions permissions**, ensure actions are allowed.
   - Under **Workflow permissions**, set:
     - **Read and write permissions** ✅ (needed for posting PR comments and caching).
   - Keep **Require approval for first-time contributors** enabled (recommended).

✅ With this setup, Pa11y will automatically run on changed pages and provide feedback directly in your pull requests.

---

## Contributing / Community

- Update `community/about.md` and `community/join.md` for your group.
- Consider adding a `CONTRIBUTING.md` and updating the Code of Conduct in `community/code_of_conduct.md`.

---

## License

This template is provided under the **MIT License**. Replace the license if you need a different one for your community.
