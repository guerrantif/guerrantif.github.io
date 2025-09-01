# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with **Zola** (static site generator) using the **Apollo theme** as a Git submodule. The site showcases research publications, blog posts, and projects for a PhD researcher in ML for graphs and structured data.

## Development Commands

- `zola serve` - Start local development server with auto-reload
- `zola build` - Build site for production (outputs to `/public/`)
- `zola check` - Validate project and check internal/external links
- `git submodule update --remote themes/apollo` - Update Apollo theme

## Architecture

### Content Organization
- **Homepage**: Custom template at `content/_index.md` using "modular-homepage.html"
- **Posts**: Blog entries in `content/posts/` with pagination (7 per page)
- **Papers**: Academic publications at `content/papers/` using "publications.html" template
- **Projects**: Portfolio items in `content/projects/` using "cards.html" template with weight-based sorting

### Publications System
Publications are managed through `data/publications.yml` with structured metadata:
- Authors, venues, years, DOIs, abstracts
- BibTeX entries, keywords, awards
- Links to PDFs, code repositories, datasets
- The publications template loads this data via `load_data(path="data/publications.yml")`
- Additional data files in `/data/`: `homepage.yml` and `news.yml` for content management

### Theme Customization Strategy
- **Apollo theme** installed as Git submodule in `themes/apollo/`
- Customizations primarily through `config.toml` rather than template overrides
- Local `/templates/` directory available for template customization (currently unused)
- Custom CSS can be added to `themes/apollo/static/css/` or overridden locally

### Configuration Structure
Main settings in `config.toml`:
- Theme configuration in `[extra]` section
- Navigation menu (currently: home, posts, papers)
- Social links and theme toggle (light/dark/auto)
- Taxonomies enabled for tags
- Syntax highlighting enabled, Sass compilation enabled

### Content Front Matter Patterns
- TOML front matter with extensive metadata support
- Template selection via `template` field
- Sorting via `weight` (projects) or date (posts)
- Custom fields for external links, media assets, etc.

### Key Templates
- `publications.html` - Structured academic paper display
- `cards.html` - Grid layout for projects with media support
- `homepage.html` - Custom landing page
- Various shortcodes: image, note, mermaid diagrams

## Important Notes

- **Data files** like publications.yml should be in the `/data/` directory for `load_data()` to work
- **Static assets** go in `static/` directory and are copied to output
- **Theme updates** require Git submodule commands, not package managers
- The site targets academic/research audience with specific publication display needs
- Apollo theme provides dark/light mode toggle and responsive design out of the box