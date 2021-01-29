import { Theme } from "@chakra-ui/theme";
import { ColorHues } from "@chakra-ui/theme/dist/types/foundations/colors";
declare type ThemeExtensionTypeHints = {
    colors: Record<string, Partial<ColorHues> | Record<string, string> | string>;
};
/**
 * Represents a loose but specific type for the theme override.
 * It provides autocomplete hints for extending the theme, but leaves room
 * for adding properties.
 */
declare type DeepThemeExtension<ThemeObject, TypeHints> = {
    [Key in keyof ThemeObject]?: Omit<DeepThemeExtension<ThemeObject[Key], TypeHints>, keyof TypeHints> | (ThemeObject[Key] extends (...args: any[]) => any ? Partial<ReturnType<ThemeObject[Key]>> : Partial<ThemeObject[Key]>);
} & Partial<TypeHints> & Record<string, any>;
export declare type ThemeOverride = DeepThemeExtension<Theme, ThemeExtensionTypeHints>;
/**
 * Function to override or customize the Chakra UI theme conveniently
 * @param overrides - Your custom theme object overrides
 * @param baseTheme - theme to customize
 */
export declare function extendTheme<T extends ThemeOverride>(overrides: T, baseTheme?: any): any;
export {};
