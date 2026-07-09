# ECG Route Namespace Note

ECG has two valid pages with the flat slug `complete-heart-block`:

- `content/ecg/never-miss/complete-heart-block.md`
- `content/ecg/atlas/complete-heart-block.md`

This is not a content error. It is a routing concern only.

## Recommended solution

Use nested route namespaces:

```text
/learn/ecg/never-miss/complete-heart-block
/learn/ecg/atlas/complete-heart-block
```

Alternative: rename one imported slug, e.g. `complete-heart-block-never-miss` and `complete-heart-block-atlas`, but this is less clean than nested routing.
