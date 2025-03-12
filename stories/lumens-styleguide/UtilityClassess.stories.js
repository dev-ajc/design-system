import React from 'react';

export default {
    title: 'Design System/Utility Classes',
    parameters: {
        docs: {
            description: {
                component: 'Utility classes for rapid styling and layout without writing custom CSS.',
            },
        },
    },
};

// Spacing Utilities
export const Spacing = () => (
    <div className="sb-example-group">
        <h4>Margin Examples</h4>
        <div className="sb-example">
            <div className="d-flex flex-column gap-md">
                <div style={{ background: '#e0e0ff' }}>Base element</div>

                <div>
                    <div className="m-md" style={{ background: '#e0e0ff' }}>
                        All-sides margin (16px)
                    </div>
                </div>

                <div className="d-flex">
                    <div className="mr-md" style={{ background: '#e0e0ff' }}>
                        Right margin (16px)
                    </div>
                    <div style={{ background: '#ffe0e0' }}>Adjacent element</div>
                </div>

                <div className="d-flex flex-column">
                    <div className="mb-md" style={{ background: '#e0e0ff' }}>
                        Bottom margin (16px)
                    </div>
                    <div style={{ background: '#ffe0e0' }}>Element below</div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="mx-auto" style={{ background: '#e0e0ff', width: '50%' }}>
                        Auto horizontal margins (centered)
                    </div>
                </div>
            </div>
        </div>

        <h4>Padding Examples</h4>
        <div className="sb-example">
            <div className="d-flex flex-column gap-md">
                <div style={{ background: '#e0ffe0', padding: '0' }}>No padding</div>

                <div className="p-md" style={{ background: '#e0ffe0' }}>
                    All-sides padding (16px)
                </div>

                <div className="px-md" style={{ background: '#e0ffe0' }}>
                    Horizontal padding (16px)
                </div>

                <div className="py-md" style={{ background: '#e0ffe0' }}>
                    Vertical padding (16px)
                </div>

                <div className="pt-md" style={{ background: '#e0ffe0' }}>
                    Top padding (16px)
                </div>
            </div>
        </div>

        <h4>Combined Spacing</h4>
        <div className="sb-example">
            <div className="p-md mb-md" style={{ background: '#e0ffe0', border: '1px solid #ccc' }}>
                Element with padding (16px) and bottom margin (16px)
            </div>
            <div style={{ background: '#e0e0ff', border: '1px solid #ccc' }}>
                Adjacent element
            </div>
        </div>
    </div>
);

Spacing.parameters = {
    docs: {
        description: {
            story: 'Spacing utilities help maintain consistent spacing throughout your UI.',
        },
    },
};

// Display Utilities
export const Display = () => (
    <div className="sb-example-group">
        <h4>Display Types</h4>
        <div className="sb-example">
            <div className="d-inline" style={{ background: '#e0e0ff' }}>
                Inline
            </div>
            <div className="d-inline" style={{ background: '#ffe0e0' }}>
                Inline
            </div>
            <div className="d-inline-block" style={{ background: '#e0ffe0', width: '150px' }}>
                Inline Block
            </div>
            <div className="d-block" style={{ background: '#fff0e0' }}>
                Block
            </div>
            <div className="d-none">This is hidden (display: none)</div>
        </div>

        <h4>Responsive Display</h4>
        <div className="sb-example">
            <div className="d-block d-md-none" style={{ background: '#e0e0ff', padding: '8px' }}>
                Visible on small screens, hidden on medium and up (resize window to see)
            </div>
            <div className="d-none d-md-block" style={{ background: '#ffe0e0', padding: '8px' }}>
                Hidden on small screens, visible on medium and up (resize window to see)
            </div>
        </div>

        <h4>Flex Display</h4>
        <div className="sb-example">
            <div className="d-flex gap-md" style={{ background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Flex item 1</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Flex item 2</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Flex item 3</div>
            </div>
        </div>

        <h4>Grid Display</h4>
        <div className="sb-example">
            <div className="d-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Grid item 1</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Grid item 2</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Grid item 3</div>
                <div style={{ background: '#fff0e0', padding: '8px' }}>Grid item 4</div>
                <div style={{ background: '#e0ffff', padding: '8px' }}>Grid item 5</div>
                <div style={{ background: '#ffe0ff', padding: '8px' }}>Grid item 6</div>
            </div>
        </div>
    </div>
);

Display.parameters = {
    docs: {
        description: {
            story: 'Display utilities control how elements are displayed in the document flow.',
        },
    },
};

// Flex Utilities
export const Flex = () => (
    <div className="sb-example-group">
        <h4>Flex Direction</h4>
        <div className="sb-example">
            <div className="d-flex flex-row gap-sm" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '16px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Item 1</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item 2</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item 3</div>
            </div>

            <div className="d-flex flex-column gap-sm" style={{ background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Item 1</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item 2</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item 3</div>
            </div>
        </div>

        <h4>Justify Content</h4>
        <div className="sb-example">
            <div className="d-flex justify-content-start gap-sm" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Start</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex justify-content-center gap-sm" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Center</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex justify-content-end gap-sm" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>End</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex justify-content-between" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Between</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex justify-content-around" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Around</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex justify-content-evenly" style={{ background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Evenly</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>
        </div>

        <h4>Align Items</h4>
        <div className="sb-example">
            <div className="d-flex align-items-start gap-sm" style={{ background: '#f5f5f5', padding: '8px', height: '100px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Start</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Align</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Items</div>
            </div>

            <div className="d-flex align-items-center gap-sm" style={{ background: '#f5f5f5', padding: '8px', height: '100px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Center</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Align</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Items</div>
            </div>

            <div className="d-flex align-items-end gap-sm" style={{ background: '#f5f5f5', padding: '8px', height: '100px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>End</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Align</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Items</div>
            </div>
        </div>

        <h4>Gap Utilities</h4>
        <div className="sb-example">
            <div className="d-flex gap-sm" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Small gap (8px)</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex gap-md" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Medium gap (16px)</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>

            <div className="d-flex gap-lg" style={{ background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px' }}>Large gap (24px)</div>
                <div style={{ background: '#ffe0e0', padding: '8px' }}>Item</div>
                <div style={{ background: '#e0ffe0', padding: '8px' }}>Item</div>
            </div>
        </div>
    </div>
);

Flex.parameters = {
    docs: {
        description: {
            story: 'Flex utilities provide powerful layout control with flexible box properties.',
        },
    },
};

// Width & Height Utilities
export const Dimensions = () => (
    <div className="sb-example-group">
        <h4>Width Utilities</h4>
        <div className="sb-example">
            <div className="d-flex flex-column gap-md">
                <div className="w-full" style={{ background: '#e0e0ff', padding: '8px' }}>
                    Full width (100%)
                </div>

                <div className="w-1/2" style={{ background: '#ffe0e0', padding: '8px' }}>
                    Half width (50%)
                </div>

                <div className="d-flex gap-sm">
                    <div className="w-1/3" style={{ background: '#e0ffe0', padding: '8px' }}>
                        One-third (33.33%)
                    </div>
                    <div className="w-2/3" style={{ background: '#fff0e0', padding: '8px' }}>
                        Two-thirds (66.67%)
                    </div>
                </div>

                <div className="d-flex gap-sm">
                    <div className="w-1/4" style={{ background: '#e0ffff', padding: '8px' }}>
                        25%
                    </div>
                    <div className="w-1/4" style={{ background: '#ffe0ff', padding: '8px' }}>
                        25%
                    </div>
                    <div className="w-1/4" style={{ background: '#fffce0', padding: '8px' }}>
                        25%
                    </div>
                    <div className="w-1/4" style={{ background: '#e0f5ff', padding: '8px' }}>
                        25%
                    </div>
                </div>

                <div style={{ background: '#f5f5f5', padding: '8px' }}>
                    <div className="w-64" style={{ background: '#e0e0ff', padding: '8px' }}>
                        64px width
                    </div>
                </div>
            </div>
        </div>

        <h4>Max Width Utilities</h4>
        <div className="sb-example">
            <div className="d-flex flex-column gap-md">
                <div className="max-w-xs" style={{ background: '#e0e0ff', padding: '8px' }}>
                    Max width 320px - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className="max-w-sm" style={{ background: '#ffe0e0', padding: '8px' }}>
                    Max width 576px - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>

                <div className="max-w-prose" style={{ background: '#e0ffe0', padding: '8px' }}>
                    Max width for comfortable reading (65ch) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>

        <h4>Height Utilities</h4>
        <div className="sb-example">
            <div className="d-flex gap-md" style={{ height: '200px', background: '#f5f5f5', padding: '8px' }}>
                <div className="h-1/2" style={{ background: '#e0e0ff', padding: '8px', width: '100px' }}>
                    Half height (50%)
                </div>

                <div className="h-full" style={{ background: '#ffe0e0', padding: '8px', width: '100px' }}>
                    Full height (100%)
                </div>

                <div className="h-64" style={{ background: '#e0ffe0', padding: '8px', width: '100px' }}>
                    64px height
                </div>
            </div>
        </div>
    </div>
);

Dimensions.parameters = {
    docs: {
        description: {
            story: 'Width and height utilities help control element dimensions consistently.',
        },
    },
};

// Text Utilities
export const Text = () => (
    <div className="sb-example-group">
        <h4>Text Alignment</h4>
        <div className="sb-example">
            <p className="text-left" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                Left-aligned text
            </p>
            <p className="text-center" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                Center-aligned text
            </p>
            <p className="text-right" style={{ background: '#f5f5f5', padding: '8px', marginBottom: '8px' }}>
                Right-aligned text
            </p>
            <p className="text-justify" style={{ background: '#f5f5f5', padding: '8px' }}>
                Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <h4>Text Color</h4>
        <div className="sb-example">
            <p className="text-primary">Primary color text</p>
            <p className="text-secondary">Secondary color text</p>
            <p className="text-success">Success color text</p>
            <p className="text-danger">Danger color text</p>
            <p className="text-warning">Warning color text</p>
            <p className="text-info">Info color text</p>
            <p className="text-dark-gray">Dark gray text</p>
            <p className="text-muted">Muted text</p>
            <div style={{ background: '#333', padding: '8px' }}>
                <p className="text-white">White text (on dark background)</p>
            </div>
        </div>

        <h4>Text Transformation</h4>
        <div className="sb-example">
            <p className="text-uppercase">uppercase text</p>
            <p className="text-lowercase">LOWERCASE TEXT</p>
            <p className="text-capitalize">capitalized text</p>
        </div>

        <h4>Font Weight</h4>
        <div className="sb-example">
            <p className="font-weight-light">Light text (300)</p>
            <p className="font-weight-normal">Normal text (400)</p>
            <p className="font-weight-medium">Medium text (500)</p>
            <p className="font-weight-semibold">Semibold text (600)</p>
            <p className="font-weight-bold">Bold text (700)</p>
        </div>

        <h4>Font Size</h4>
        <div className="sb-example">
            <p className="text-xs">Extra small text (12px)</p>
            <p className="text-sm">Small text (14px)</p>
            <p className="text-md">Medium text (16px)</p>
            <p className="text-lg">Large text (18px)</p>
            <p className="text-xl">Extra large text (20px)</p>
            <p className="text-2xl">2x Extra large text (24px)</p>
            <p className="text-3xl">3x Extra large text (30px)</p>
        </div>

        <h4>Text Wrapping</h4>
        <div className="sb-example">
            <div style={{ width: '200px', border: '1px dashed #ccc', padding: '8px', marginBottom: '8px' }}>
                <p className="text-nowrap">This text doesn't wrap even if it's very long and should overflow its container</p>
            </div>

            <div style={{ width: '200px', border: '1px dashed #ccc', padding: '8px', marginBottom: '8px' }}>
                <p className="text-truncate">This text truncates with an ellipsis if it's too long for its container</p>
            </div>

            <div style={{ width: '200px', border: '1px dashed #ccc', padding: '8px' }}>
                <p className="text-break">ThisTextBreaksAtAnyPointToPreventOverflowEvenWithReallyLongWordsLikeThisOne</p>
            </div>
        </div>
    </div>
);

Text.parameters = {
    docs: {
        description: {
            story: 'Text utilities control typography appearance, sizing, and behavior.',
        },
    },
};

// Background & Border Utilities
export const BackgroundAndBorders = () => (
    <div className="sb-example-group">
        <h4>Background Colors</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div className="bg-primary text-white p-md" style={{ width: '120px', height: '80px' }}>Primary</div>
                <div className="bg-secondary text-white p-md" style={{ width: '120px', height: '80px' }}>Secondary</div>
                <div className="bg-success text-white p-md" style={{ width: '120px', height: '80px' }}>Success</div>
                <div className="bg-danger text-white p-md" style={{ width: '120px', height: '80px' }}>Danger</div>
                <div className="bg-warning text-black p-md" style={{ width: '120px', height: '80px' }}>Warning</div>
                <div className="bg-info text-white p-md" style={{ width: '120px', height: '80px' }}>Info</div>
                <div className="bg-light-gray text-black p-md" style={{ width: '120px', height: '80px' }}>Light Gray</div>
                <div className="bg-dark-gray text-white p-md" style={{ width: '120px', height: '80px' }}>Dark Gray</div>
                <div className="bg-white text-black p-md" style={{ width: '120px', height: '80px', border: '1px solid #ccc' }}>White</div>
                <div className="bg-black text-white p-md" style={{ width: '120px', height: '80px' }}>Black</div>
            </div>
        </div>

        <h4>Border</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div className="border p-md" style={{ width: '150px', height: '80px' }}>
                    All borders
                </div>
                <div className="border-top p-md" style={{ width: '150px', height: '80px' }}>
                    Top border
                </div>
                <div className="border-right p-md" style={{ width: '150px', height: '80px' }}>
                    Right border
                </div>
                <div className="border-bottom p-md" style={{ width: '150px', height: '80px' }}>
                    Bottom border
                </div>
                <div className="border-left p-md" style={{ width: '150px', height: '80px' }}>
                    Left border
                </div>
            </div>
        </div>

        <h4>Border Color</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div className="border border-primary p-md" style={{ width: '150px', height: '80px' }}>
                    Primary border
                </div>
                <div className="border border-secondary p-md" style={{ width: '150px', height: '80px' }}>
                    Secondary border
                </div>
                <div className="border border-success p-md" style={{ width: '150px', height: '80px' }}>
                    Success border
                </div>
                <div className="border border-danger p-md" style={{ width: '150px', height: '80px' }}>
                    Danger border
                </div>
            </div>
        </div>

        <h4>Border Width & Style</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div className="border border-width-1 p-md" style={{ width: '150px', height: '80px' }}>
                    1px border
                </div>
                <div className="border border-width-3 p-md" style={{ width: '150px', height: '80px' }}>
                    3px border
                </div>
                <div className="border border-dashed p-md" style={{ width: '150px', height: '80px' }}>
                    Dashed border
                </div>
                <div className="border border-dotted p-md" style={{ width: '150px', height: '80px' }}>
                    Dotted border
                </div>
            </div>
        </div>

        <h4>Border Radius</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div className="rounded bg-light-gray p-md" style={{ width: '100px', height: '80px' }}>
                    Default radius
                </div>
                <div className="rounded-sm bg-light-gray p-md" style={{ width: '100px', height: '80px' }}>
                    Small radius
                </div>
                <div className="rounded-lg bg-light-gray p-md" style={{ width: '100px', height: '80px' }}>
                    Large radius
                </div>
                <div className="rounded-xl bg-light-gray p-md" style={{ width: '100px', height: '80px' }}>
                    XL radius
                </div>
                <div className="rounded-circle bg-light-gray d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    Circle
                </div>
                <div className="rounded-pill bg-light-gray d-flex align-items-center justify-content-center" style={{ width: '120px', height: '60px' }}>
                    Pill
                </div>
            </div>
        </div>
    </div>
);

BackgroundAndBorders.parameters = {
    docs: {
        description: {
            story: 'Background and border utilities provide visual styling without custom CSS.',
        },
    },
};

// Position & Overflow Utilities
export const PositionAndOverflow = () => (
    <div className="sb-example-group">
        <h4>Position</h4>
        <div className="sb-example">
            <div style={{ height: '200px', background: '#f5f5f5', position: 'relative', padding: '8px', marginBottom: '16px' }}>
                <div className="position-static" style={{ background: '#e0e0ff', padding: '8px', width: '150px', marginBottom: '8px' }}>
                    Static position (default)
                </div>
                <div className="position-relative" style={{ background: '#ffe0e0', padding: '8px', width: '150px', top: '20px', left: '20px' }}>
                    Relative position (moved right/down 20px)
                </div>
                <div className="position-absolute" style={{ background: '#e0ffe0', padding: '8px', width: '150px', bottom: '8px', right: '8px' }}>
                    Absolute position (bottom right)
                </div>
            </div>

            <div style={{ height: '100px', background: '#f5f5f5', overflow: 'hidden', position: 'relative' }}>
                <div className="position-sticky" style={{ background: '#e0ffff', padding: '8px', top: '0' }}>
                    Sticky position (scroll container to see)
                </div>
                <div style={{ height: '500px', padding: '40px 8px 8px 8px' }}>
                    Content below sticky element (scroll to see sticky behavior)
                </div>
            </div>
        </div>

        <h4>Overflow</h4>
        <div className="sb-example">
            <div className="d-flex gap-md">
                <div className="overflow-auto" style={{ width: '150px', height: '120px', background: '#f5f5f5', padding: '8px' }}>
                    <p>Overflow auto - This content is too big for the container, so scrollbars appear as needed.</p>
                    <p>More content to force scrolling.</p>
                    <p>Even more content to ensure scrolling is necessary.</p>
                    <p>Scroll to see all content.</p>
                </div>

                <div className="overflow-hidden" style={{ width: '150px', height: '120px', background: '#f5f5f5', padding: '8px' }}>
                    <p>Overflow hidden - This content is clipped when it exceeds the container.</p>
                    <p>This part is likely not visible.</p>
                    <p>This is definitely hidden.</p>
                </div>

                <div className="overflow-visible" style={{ width: '150px', height: '120px', background: '#f5f5f5', padding: '8px', position: 'relative', zIndex: 1 }}>
                    <p>Overflow visible - Content can flow outside the container bounds.</p>
                    <p>This content remains visible even outside the box.</p>
                    <p>No clipping occurs.</p>
                </div>
            </div>
        </div>

        <h4>Axis-Specific Overflow</h4>
        <div className="sb-example">
            <div className="d-flex gap-md">
                <div className="overflow-x-auto overflow-y-hidden" style={{ width: '150px', height: '120px', background: '#f5f5f5', padding: '8px', whiteSpace: 'nowrap' }}>
                    <p>Overflow-x auto, overflow-y hidden. This allows horizontal scrolling only.</p>
                </div>

                <div className="overflow-x-hidden overflow-y-auto" style={{ width: '150px', height: '120px', background: '#f5f5f5', padding: '8px' }}>
                    <p>Overflow-x hidden, overflow-y auto. This allows vertical scrolling only.</p>
                    <p>More content to force scrolling.</p>
                    <p>Even more content to ensure scrolling is necessary.</p>
                </div>
            </div>
        </div>
    </div>
);

PositionAndOverflow.parameters = {
    docs: {
        description: {
            story: 'Position and overflow utilities control element positioning and content overflow behavior.',
        },
    },
};

// Aspect Ratio Utilities
export const AspectRatio = () => (
    <div className="sb-example-group">
        <h4>Common Aspect Ratios</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-16:9">
                        <div style={{ background: '#e0e0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            16:9 Aspect Ratio
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-4:3">
                        <div style={{ background: '#ffe0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            4:3 Aspect Ratio
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-square">
                        <div style={{ background: '#e0ffe0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            1:1 Square
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h4>Other Aspect Ratios</h4>
        <div className="sb-example">
            <div className="d-flex flex-wrap gap-md">
                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-21:9">
                        <div style={{ background: '#e0ffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            21:9 Ultrawide
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-3:4">
                        <div style={{ background: '#ffe0ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            3:4 Portrait
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}>
                    <div className="aspect aspect-9:16">
                        <div style={{ background: '#fff0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            9:16 Mobile
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

AspectRatio.parameters = {
    docs: {
        description: {
            story: 'Aspect ratio utilities maintain consistent proportions for responsive media.',
        },
    },
};

// Aspect Ratio with Images
export const AspectRatioWithImages = () => {
    const image = '866';

    return (<>
        <div className="sb-example-group">
            <h4>Image in 16:9 Aspect Ratio</h4>
            <div className="sb-example">
                <div className="aspect aspect-16:9" style={{ marginBottom: '20px', width: '80%', }}>
                    <img src={`https://picsum.photos/id/${image}/800/450`} alt="Example" />
                </div>
            </div>

            <h4>Image in 1:1 Aspect Ratio</h4>
            <div className="sb-example">
                <div className="aspect aspect-1:1" style={{ marginBottom: '20px', width: '80%', }}>
                    <img src={`https://picsum.photos/id/${image}/800/450`} alt="Example" />
                </div>
            </div>

            <h4>Image in 2:3 Aspect Ratio</h4>
            <div className="sb-example">
                <div className="aspect aspect-2:3" style={{ maxWidth: '300px', marginBottom: '20px' }}>
                    <img src={`https://picsum.photos/id/${image}/800/450`} alt="Example" />
                </div>
            </div>
        </div> 
    </>);
};

// Embedded content example
export const AspectRatioWithEmbeddedContent = () => (<>
    <div className="sb-example-group">
        <h4>Video Embed Example</h4>
        <div className="sb-example">
            <div className="aspect aspect-16:9 aspect-iframe" style={{ marginBottom: '20px', width: '80%', }}>
                <iframe 
                    src="https://www.youtube.com/embed/gdlTFPebzAU" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>

        <h4>Map Embed Example</h4>
        <div className="sb-example">
            <div className="aspect aspect-4:3 aspect-iframe" style={{ marginBottom: '20px', width: '80%', }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004073.069200484!2d-104.65611544371094!3d37.27565371492453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1599672082020!5m2!1sen!2sus" 
                    title="Google Maps"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </div>
</>);

// Responsive Utilities
export const ResponsivePatterns = () => (
    <div className="sb-example-group">
        <h4>Responsive Text Alignment</h4>
        <div className="sb-example">
            <p className="text-center text-md-left text-lg-right" style={{ background: '#f5f5f5', padding: '8px' }}>
                This text is centered on small screens, left-aligned on medium screens, and right-aligned on large screens. Resize your browser to see the changes.
            </p>
        </div>

        <h4>Responsive Width</h4>
        <div className="sb-example">
            <div className="w-full w-md-1/2 w-lg-1/3" style={{ background: '#e0e0ff', padding: '8px', marginLeft: 'auto', marginRight: 'auto' }}>
                Full width on small screens, half width on medium screens, one-third width on large screens. Resize your browser to see the changes.
            </div>
        </div>

        <h4>Responsive Display</h4>
        <div className="sb-example">
            <div className="d-none d-md-block" style={{ background: '#ffe0e0', padding: '8px' }}>
                This element is hidden on small screens, visible on medium screens and up. Resize your browser to see the changes.
            </div>

            <div className="d-block d-lg-none" style={{ background: '#e0ffe0', padding: '8px', marginTop: '8px' }}>
                This element is visible on small and medium screens, hidden on large screens. Resize your browser to see the changes.
            </div>
        </div>

        <h4>Responsive Flex Direction</h4>
        <div className="sb-example">
            <div className="d-flex flex-column flex-md-row gap-md" style={{ background: '#f5f5f5', padding: '8px' }}>
                <div style={{ background: '#e0e0ff', padding: '8px', flexGrow: 1 }}>
                    First item
                </div>
                <div style={{ background: '#ffe0e0', padding: '8px', flexGrow: 1 }}>
                    Second item
                </div>
                <div style={{ background: '#e0ffe0', padding: '8px', flexGrow: 1 }}>
                    Third item
                </div>
            </div>
            <p className="mt-sm text-xs text-medium-gray">
                Items stack vertically on small screens, horizontally on medium screens and up. Resize your browser to see the changes.
            </p>
        </div>
    </div>
);

ResponsivePatterns.parameters = {
    docs: {
        description: {
            story: 'Responsive utilities adapt to different screen sizes with breakpoint-specific variants.',
        },
    },
};

// Combined Examples
export const CombinedUtilities = () => (
    <div className="sb-example-group">
        <h4>Card-like Layout with Utilities</h4>
        <div className="sb-example">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md gap-lg bg-light-gray rounded">
                <div className="w-full w-md-1/2 mb-md mb-md-0">
                    <h4 className="text-2xl font-weight-bold mb-sm">Left Content</h4>
                    <p className="text-md text-dark-gray">Some descriptive text here displaying information that might be important.</p>
                </div>
                <div className="w-full w-md-1/2">
                    <div className="border border-primary rounded p-md bg-white">
                        <h5 className="text-xl text-primary mb-sm">Right Content</h5>
                        <p className="text-sm">Additional content displayed in a bordered container.</p>
                    </div>
                </div>
            </div>
        </div>

        <h4>Navigation-like Layout with Utilities</h4>
        <div className="sb-example">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md bg-white border-bottom">
                <div className="d-flex align-items-center mb-md mb-md-0">
                    <div className="font-weight-bold text-lg mr-lg">Brand</div>
                    <div className="d-flex gap-md">
                        <a href="#" className="text-dark-gray text-decoration-none">Home</a>
                        <a href="#" className="text-dark-gray text-decoration-none">Features</a>
                        <a href="#" className="text-dark-gray text-decoration-none">Pricing</a>
                    </div>
                </div>
                <div className="d-flex gap-sm">
                    <button className="bg-primary text-white py-xs px-md rounded">Sign Up</button>
                </div>
            </div>
        </div>

        <h4>Media Object with Utilities</h4>
        <div className="sb-example">
            <div className="d-flex gap-md p-md">
                <div className="flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                    <div className="rounded-circle bg-medium-gray h-full d-flex align-items-center justify-content-center text-white">
                        Image
                    </div>
                </div>
                <div>
                    <h5 className="font-weight-bold mb-xs">Media heading</h5>
                    <p className="text-sm text-dark-gray">This is some sample content that would typically accompany an image in a media object. Text wraps around the image.</p>
                </div>
            </div>
        </div>
    </div>
);

CombinedUtilities.parameters = {
    docs: {
        description: {
            story: 'Complex UI patterns can be created by combining multiple utility classes.',
        },
    },
};

// Add some basic styles for the Storybook examples
const style = document.createElement('style');
style.innerHTML = `
  .sb-example-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .sb-example {
    margin-top: 0.5rem;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fff;
  }
  
  h4 {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .text-decoration-none {
    text-decoration: none;
  }
  
  /* Add some padding utilities for the examples */
  .py-xs {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  
  .px-md {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
document.head.appendChild(style);