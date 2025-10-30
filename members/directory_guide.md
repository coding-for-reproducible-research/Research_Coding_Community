# Members Directory Contribution Guide

Welcome! This guide walks you through adding yourself to the Research Coding Community members directory while practising the GitHub pull-request workflow.

> Looking for the directory itself? Head to the [Members directory](directory) to see the growing list of contributors.

## Step-by-step: add yourself via pull request

1. **Fork the repo**  
   Visit [coding-for-reproducible-research/Research_Coding_Community](https://github.com/coding-for-reproducible-research/Research_Coding_Community) and click `Fork`.

2. **Clone your fork**  
   ```bash
   git clone https://github.com/<your-username>/Research_Coding_Community.git
   cd Research_Coding_Community
   ```

3. **Create a branch for your entry**  
   ```bash
   git checkout -b add-<your-name>-to-directory
   ```

4. **Edit the directory**  
   Open `members/directory.md` and add a new row to the table. Include:
   - Your name
   - A link to your GitHub profile
   - A short note about something you're proud of (project, publication, community work, etc.)
   - Optional but encouraged: a fun fact, emoji, or link that showcases your personality

   > Tip: keep the table alphabetised by first name so it stays easy to browse.

5. **Commit your change**  
   ```bash
   git add members/directory.md
   git commit -m "Add <Your Name> to members directory"
   ```

6. **Push and open a PR**  
   ```bash
   git push origin add-<your-name>-to-directory
   ```
   Then open a pull request back to the main repository. Tell us briefly what you added and hit submit!

7. **Celebrate & share**  
   Once your PR is merged, your entry becomes part of the official directory—and you’ve just contributed to an open-source project. 🎉

## Need inspiration?

- Browse existing entries in the [Members directory](directory) for examples.
- Pair up with a friend and review each other's pull requests.
- Ready for more? Tackle a documentation typo, propose a new resource, or share a lesson learned in your research coding journey.

When you're done, drop into the community spaces and let folks know you joined—new contributors are always welcome!
