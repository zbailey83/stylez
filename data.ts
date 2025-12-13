import { GalleryData } from './types';

export const galleryData: GalleryData = {
  "styles": [
    {
      "id": 1,
      "name": "Neo-Brutalism",
      "aesthetic": "raw, bold, anti-corporate",
      "category": "neo-brutalism",
      "description": "A bold, uncompromising design language that embraces rawness and authenticity. Inspired by architectural brutalism, it features thick borders, flat colors, zero-tolerance for decoration, and aggressive typography.",
      "colors": {
        "background": {
          "primary": "#FDF9F2"
        }
      }
    },
    {
      "id": 2,
      "name": "Refined Glassmorphism",
      "aesthetic": "premium, layered, translucent",
      "category": "glassmorphism",
      "description": "An elegant, sophisticated design language featuring translucent, frosted-glass panels that appear to float above rich gradient backgrounds. Creates depth through layering and subtle blur effects.",
      "colors": {
        "backgrounds": {
          "primary": "radial-gradient(circle at top left, #071629 0%, #020712 55%, #000000 100%)"
        }
      }
    },
    {
      "id": 3,
      "name": "Dark Mode + Neon",
      "aesthetic": "futuristic, high-contrast, gaming-inspired",
      "category": "dark-mode-neon",
      "description": "A cyberpunk-inspired dark interface with glowing neon accents that evokes high-tech command centers and gaming UIs. Perfect for crypto, fintech, or tech-forward applications.",
      "colors": {
        "background": {
          "primary": "#0a0a0f"
        }
      }
    },
    {
      "id": 4,
      "name": "Claymorphism",
      "aesthetic": "playful, tactile, inflated 3D",
      "category": "claymorphism",
      "description": "A warm, approachable design language featuring soft, puffy elements that appear to float like sculpted clay. Creates a friendly, tactile experience perfect for consumer-facing apps.",
      "colors": {
        "background": {
          "start": "#ffd4c4"
        }
      }
    },
    {
      "id": 5,
      "name": "Y2K / Retro-Futurist",
      "aesthetic": "nostalgic, energetic, pixelated",
      "category": "y2k-retro",
      "description": "An energetic throwback to early 2000s digital optimism, combining chrome effects, iridescent gradients, and playful pixelated elements. Balances nostalgia with modern usability.",
      "colors": {
        "background": {
          "type": "full-screen iridescent gradient"
        }
      }
    },
    {
      "id": 6,
      "name": "Bento Grid Layouts",
      "aesthetic": "structured, modular, dynamic",
      "category": "bento-grid",
      "description": "A flexible, tile-based layout system inspired by Japanese bento boxes. Features modular cards of varying sizes arranged in an organized grid, creating visual hierarchy.",
      "colors": {
        "background": {
          "primary": "#fafafa"
        }
      }
    },
    {
      "id": 7,
      "name": "Minimalism 2.0",
      "aesthetic": "clean, calm, product-led",
      "category": "modern-minimalism",
      "description": "An evolution of minimalist design that adds subtle personality through thoughtful micro-interactions and refined details. Prioritizes clarity and calm user experiences.",
      "colors": {
        "background": {
          "primary": "#fafafa"
        }
      }
    },
    {
      "id": 8,
      "name": "Maximalism",
      "aesthetic": "bold, playful, layered chaos",
      "category": "maximalism-memphis",
      "description": "A vibrant, expressive style that embraces 'more is more'. Combines Memphis design elements with scrapbook aesthetics. Creates energetic, memorable experiences.",
      "colors": {
        "background": {
          "type": "full-bleed gradient or solid bright color"
        }
      }
    },
    {
      "id": 9,
      "name": "Technical Paper Glass",
      "aesthetic": "clean, technical, airy, structured, frosted",
      "category": "light-mode-paper-glass",
      "description": "A bright, modern productivity interface featuring a technical grid-paper background, layered frosted glass panels with high blur, crisp slate typography, and vibrant gradients (Sky Blue to Purple) for accents.",
      "colors": {
        "background": {
          "base": "#F8FAFC",
          "pattern": "linear-gradient(#E2E8F0 1.5px, transparent 1.5px), linear-gradient(90deg, #E2E8F0 1.5px, transparent 1.5px)"
        }
      },
      "tokens": {
        "border_radius": "mixed (8px to 24px)",
        "glass_blur": "12px - 18px"
      }
    },
    {
      "id": 10,
      "name": "Gemini Technical Artifacts",
      "aesthetic": "technical, futuristic, transparent, precise",
      "category": "gemini-technical",
      "description": "A technical, futuristic design system emphasizing transparency, fine borders, and precise typography. Evokes a sense of high-performance engineering.",
      "meta": {
        "name": "Gemini Technical Artifacts Theme",
        "version": "1.0.0",
        "description": "A technical, futuristic design system emphasizing transparency, fine borders, and precise typography."
      },
      "tokens": {
        "colors": {
          "background": {
            "app": "#09090b",
            "surface": "#18181b",
            "surface-hover": "#27272a"
          },
          "text": {
            "primary": "#fafafa",
            "secondary": "#a1a1aa",
            "muted": "#52525b",
            "inverted": "#000000"
          },
          "accent": {
            "blue": "#3b82f6"
          }
        },
        "effects": {
          "shadows": {
            "glow": "0 0 20px rgba(59, 130, 246, 0.1)"
          }
        },
        "components": {
          "technical-grid": {
            "css": "background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px); background-size: 40px 40px;"
          }
        }
      }
    },
    {
      "id": 11,
      "name": "8-Bit / Retro Console Interfaces",
      "aesthetic": "crunchy, nostalgic, arcade-style",
      "category": "retro-gaming",
      "description": "A tribute to the golden age of 8-bit consoles and RPGs. Prioritizes rigid grids, crisp pixel edges, and a limited primary color palette. Balances 'gamification' with functional clarity.",
      "colors": {
        "background": {
          "type": "flat solid or dithered pattern",
          "colors": ["#212529", "#f8f9fa", "#87cf3a"],
          "effect": "optional CRT vignette overlay",
          "animation": "static noise (on empty states)"
        },
        "accents": {
          "console_red": "#e7040f",
          "link_green": "#4cb050",
          "hero_blue": "#0052cc",
          "coin_yellow": "#ffcc00",
          "gameboy_dark": "#0f380f"
        },
        "text": {
          "primary": "#212529 or #ffffff",
          "secondary": "#9ca3af",
          "highlight": "console red or coin yellow",
          "readability": "high contrast, monospaced rhythm"
        }
      },
      "typography": {
        "logo": {
          "type": "bitmap font / pixel art",
          "effects": ["hard drop shadow", "step-gradient fill"],
          "weight": "400 (pixels simulate bold)",
          "size": "32-48px (multiples of 8)",
          "extrusion": "4px hard block shadow"
        },
        "headings": {
          "family": "pixel display font (e.g., 'Press Start 2P', 'VT323')",
          "weight": "400",
          "size": "24-32px",
          "color": "inherit",
          "effects": "all-caps encouraged"
        },
        "body": {
          "family": "monospaced sans (e.g., 'Courier New', 'Roboto Mono', 'Pixelify Sans')",
          "weight": "400",
          "size": "14-16px",
          "line_height": "1.5",
          "color": "#212529",
          "note": "anti-aliasing disabled where possible"
        }
      },
      "components": {
        "windows": {
          "style": "dialog box / RPG text container",
          "appearance": "centered or grid-snapped",
          "chrome": "thick borders with corner sprites",
          "shadow": "hard block shadow (4px 4px 0px #000000)",
          "border": "4px double or solid 'outset' style"
        },
        "buttons": {
          "style": "push-button cartridge",
          "border": "4px solid (light top/left, dark bottom/right)",
          "background": "#e6e6e6 or accent color",
          "padding": "8px 16px",
          "border_radius": "0px",
          "hover_state": "invert colors or blink",
          "active_state": "border colors swap (inset effect)"
        },
        "icons": {
          "style": "16x16 or 32x32 pixel art",
          "size": "auto (scale nearest-neighbor)",
          "colors": "limited 4-color palette",
          "aesthetic": "readable silhouette"
        }
      },
      "layout": {
        "type": "container-based",
        "structure": "block-heavy / modular",
        "composition": "strict grid alignment",
        "hierarchy": "defined by border thickness and uppercase text",
        "breakpoints": "mobile-first (inherently blocky)"
      },
      "effects": {
        "overlays": {
          "scanlines": {
            "opacity": 0.1,
            "height": "1px lines",
            "spacing": "2px",
            "pointer_events": "none"
          },
          "vignette": {
            "type": "radial gradient",
            "intensity": "darkens corners",
            "color": "rgba(0,0,0,0.2)"
          },
          "dither": {
            "texture": "bayer matrix pattern",
            "opacity": 0.05,
            "usage": "backgrounds or shadows"
          }
        },
        "animations": {
          "cursor_blink": "infinite step-end blink (1s)",
          "text_reveal": "typewriter effect (character by character)",
          "button_press": "translate(4px, 4px) + remove shadow",
          "duration": "0s (instant) or 150ms steps",
          "easing": "steps(4) or linear"
        },
        "retro_feel": {
          "technique": "box-sizing: border-box everywhere",
          "scroll": "snap scrolling preferred",
          "depth": "isometric or flat layers (no blur shadows)"
        }
      },
      "characteristics": {
        "nostalgic": "references NES/SNES interface design",
        "crunchy": "hard edges, no anti-aliasing",
        "gamified": "interactions feel like controller inputs",
        "accessible": "high contrast by default"
      }
    },
    {
      "id": 12,
      "name": "Marshmallow",
      "aesthetic": "pastel, sharp-edged, soft, serif",
      "category": "marshmallow",
      "description": "A unique blend of soft pastel colors and sharp, distinct geometry. Features the elegant Gabriela serif font and zero-radius components, creating a 'cut marshmallow' aesthetic that is both cute and precise.",
      "theme": {
        "name": "marshmallow",
        "source": "@ss-themes/marshmallow"
      },
      "colors": {
        "light": {
          "background": "#f2f5fc",
          "foreground": "#1b1b1b",
          "card": "#ffffff",
          "cardForeground": "#1b1b1b",
          "popover": "#ffffff",
          "popoverForeground": "#1b1b1b",
          "primary": "#ff97cc",
          "primaryForeground": "#000000",
          "secondary": "#f7ecb7",
          "secondaryForeground": "#000000",
          "muted": "#e2e4eb",
          "mutedForeground": "#383838",
          "accent": "#99cdff",
          "accentForeground": "#000000",
          "destructive": "#ff6364",
          "border": "#cecece",
          "input": "#cecece",
          "ring": "#99cdff",
          "chart": {
            "1": "#ff97cc",
            "2": "#cc99ff",
            "3": "#99cdff",
            "4": "#ffcc98",
            "5": "#cbfe98"
          },
          "sidebar": {
            "background": "#ffffff",
            "foreground": "#1b1b1b",
            "primary": "#ff97cc",
            "primaryForeground": "#000000",
            "accent": "#99cdff",
            "accentForeground": "#000000",
            "border": "#cecece",
            "ring": "#99cdff"
          }
        },
        "dark": {
          "background": "#1b1b1b",
          "foreground": "#f2f5fc",
          "card": "#2b2b2b",
          "cardForeground": "#f2f5fc",
          "popover": "#2b2b2b",
          "popoverForeground": "#f2f5fc",
          "primary": "#ff97cc",
          "primaryForeground": "#1b1b1b",
          "secondary": "#cc99ff",
          "secondaryForeground": "#1b1b1b",
          "muted": "#333333",
          "mutedForeground": "#cecece",
          "accent": "#99cdff",
          "accentForeground": "#1b1b1b",
          "destructive": "#ff6364",
          "border": "#454545",
          "input": "#454545",
          "ring": "#99cdff",
          "chart": {
            "1": "#ff97cc",
            "2": "#cc99ff",
            "3": "#99cdff",
            "4": "#ffcc98",
            "5": "#cbfe98"
          },
          "sidebar": {
            "background": "#2b2b2b",
            "foreground": "#f2f5fc",
            "primary": "#ff97cc",
            "primaryForeground": "#1b1b1b",
            "accent": "#99cdff",
            "accentForeground": "#1b1b1b",
            "border": "#454545",
            "ring": "#99cdff"
          }
        }
      },
      "typography": {
        "fontSans": "Gabriela, Geist Fallback, ui-sans-serif",
        "fontSerif": "Gabriela, Geist Fallback, ui-serif",
        "fontMono": "Geist Mono, Geist Mono Fallback, ui-monospace"
      },
      "radius": {
        "base": "0rem",
        "sm": "calc(var(--radius) - 4px)",
        "md": "calc(var(--radius) - 2px)",
        "lg": "var(--radius)",
        "xl": "calc(var(--radius) + 4px)"
      },
      "shadows": {
        "light": {
          "2xs": "0px 2px 5px 0px rgb(153 205 255 / 0.05)",
          "xs": "0px 2px 5px 0px rgb(153 205 255 / 0.05)",
          "sm": "0px 2px 5px 0px rgb(153 205 255 / 0.10), 0px 1px 2px -1px rgb(153 205 255 / 0.10)",
          "default": "0px 2px 5px 0px rgb(153 205 255 / 0.10), 0px 1px 2px -1px rgb(153 205 255 / 0.10)",
          "md": "0px 2px 5px 0px rgb(153 205 255 / 0.10), 0px 2px 4px -1px rgb(153 205 255 / 0.10)",
          "lg": "0px 2px 5px 0px rgb(153 205 255 / 0.10), 0px 4px 6px -1px rgb(153 205 255 / 0.10)",
          "xl": "0px 2px 5px 0px rgb(153 205 255 / 0.10), 0px 8px 10px -1px rgb(153 205 255 / 0.10)",
          "2xl": "0px 2px 5px 0px rgb(153 205 255 / 0.25)"
        },
        "dark": {
          "2xs": "0px 1px 2px 0px #99cdff1a",
          "xs": "0px 1px 2px 0px #99cdff1a",
          "sm": "0px 1px 2px 0px #99cdff1a, 0px 1px 2px -1px #99cdff1a",
          "default": "0px 1px 2px 0px #99cdff1a, 0px 1px 2px -1px #99cdff1a",
          "md": "0px 1px 2px 0px #99cdff1a, 0px 2px 4px -1px #99cdff1a",
          "lg": "0px 1px 2px 0px #99cdff1a, 0px 4px 6px -1px #99cdff1a",
          "xl": "0px 1px 2px 0px #99cdff1a, 0px 8px 10px -1px #99cdff1a",
          "2xl": "0px 1px 2px 0px #99cdff1a"
        }
      },
      "cssVariables": {
        "light": {
          "--background": "#f2f5fc",
          "--foreground": "#1b1b1b",
          "--card": "#ffffff",
          "--card-foreground": "#1b1b1b",
          "--popover": "#ffffff",
          "--popover-foreground": "#1b1b1b",
          "--primary": "#ff97cc",
          "--primary-foreground": "#000000",
          "--secondary": "#f7ecb7",
          "--secondary-foreground": "#000000",
          "--muted": "#e2e4eb",
          "--muted-foreground": "#383838",
          "--accent": "#99cdff",
          "--accent-foreground": "#000000",
          "--destructive": "#ff6364",
          "--border": "#cecece",
          "--input": "#cecece",
          "--ring": "#99cdff",
          "--chart-1": "#ff97cc",
          "--chart-2": "#cc99ff",
          "--chart-3": "#99cdff",
          "--chart-4": "#ffcc98",
          "--chart-5": "#cbfe98",
          "--sidebar": "#ffffff",
          "--sidebar-foreground": "#1b1b1b",
          "--sidebar-primary": "#ff97cc",
          "--sidebar-primary-foreground": "#000000",
          "--sidebar-accent": "#99cdff",
          "--sidebar-accent-foreground": "#000000",
          "--sidebar-border": "#cecece",
          "--sidebar-ring": "#99cdff",
          "--font-sans": "Gabriela, Geist Fallback, ui-sans-serif",
          "--font-serif": "Gabriela, Geist Fallback, ui-serif",
          "--font-mono": "Geist Mono, Geist Mono Fallback, ui-monospace",
          "--radius": "0rem"
        },
        "dark": {
          "--background": "#1b1b1b",
          "--foreground": "#f2f5fc",
          "--card": "#2b2b2b",
          "--card-foreground": "#f2f5fc",
          "--popover": "#2b2b2b",
          "--popover-foreground": "#f2f5fc",
          "--primary": "#ff97cc",
          "--primary-foreground": "#1b1b1b",
          "--secondary": "#cc99ff",
          "--secondary-foreground": "#1b1b1b",
          "--muted": "#333333",
          "--muted-foreground": "#cecece",
          "--accent": "#99cdff",
          "--accent-foreground": "#1b1b1b",
          "--destructive": "#ff6364",
          "--border": "#454545",
          "--input": "#454545",
          "--ring": "#99cdff",
          "--chart-1": "#ff97cc",
          "--chart-2": "#cc99ff",
          "--chart-3": "#99cdff",
          "--chart-4": "#ffcc98",
          "--chart-5": "#cbfe98",
          "--sidebar": "#2b2b2b",
          "--sidebar-foreground": "#f2f5fc",
          "--sidebar-primary": "#ff97cc",
          "--sidebar-primary-foreground": "#1b1b1b",
          "--sidebar-accent": "#99cdff",
          "--sidebar-accent-foreground": "#1b1b1b",
          "--sidebar-border": "#454545",
          "--sidebar-ring": "#99cdff"
        }
      }
    }
  ]
};