# For deployment:

### **_Reminder: Commit everything before!!!_**

### **_Reminder2: change package.json and vite.config.js_**

---

```bash
git checkout -b gh-pages
```

```bash
git merge main --no-edit
```

```bash
git add -f dist && git commit -m "Deploument commit"
```

```bash
git subtree push --prefix dist origin gh-pages
```

## **if conflicts**

```bash
git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force
```

[Usefull links](https://clontz.org/blog/2014/05/08/git-subtree-push-for-deployment/)

---

## **_To stop tracking some files_**

```bash
git update-index --skip-worktree vite.config.js
```

also try:

```bash
git update-index --assume-unchanged vite.config.js
```

## **_for traching them_**

```bash
git update-index --no-skip-worktree vite.config.js
```

also try:

```bash
git update-index --no-assume-unchanged vite.config.js
```
