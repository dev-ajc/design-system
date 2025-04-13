/**
 * Gets the computed value of a CSS custom property (CSS variable)
 * @param {string} variable - The CSS variable name (e.g. '--color-primary')
 * @returns {string} The computed value of the CSS variable
 * @example
 * // Get the primary color value
 * const primaryColor = getCssVariable('--color-primary');
 * 
 * // Get a font size value 
 * const fontSize = getCssVariable('--font-size-lg');
 */
function getCssVariable(variable) {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

export { getCssVariable };
