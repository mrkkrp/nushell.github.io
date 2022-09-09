---
title: sum
version: 0.68.0
usage: |
  Aggregates columns to their sum value
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> sum ```

## Examples

Sums all columns in a dataframe
```shell
> [[a b]; [6 2] [1 4] [4 1]] | into df | sum
```