import init, {
  Converter,
  createConverter,
  InitInput,
} from '../dist-wasm/svg2png_wasm';
import { ConverterOptions, ConvertOptions, Svg2png } from './types';

let initialized = false;

/**
 * Initialize WASM module
 * @param mod WebAssembly Module or WASM url
 */
export const initialize = async (
  mod: Promise<InitInput> | InitInput,
): Promise<void> => {
  if (initialized) {
    throw new Error(
      'Already initialized. The `initialize` function can be used only once.',
    );
  }
  await init(await mod);
  initialized = true;
};

/**
 * @param opts Converter options (e.g. font settings)
 * @returns svg2png converter
 */
export const createSvg2png = (opts?: ConverterOptions): Svg2png => {
  if (!initialized)
    throw new Error(
      'WASM has not been initialized. Call `initialize` function.',
    );
  let converter: Converter | undefined;

  let serifFamily = undefined;
  let sansSerifFamily = undefined;
  let cursiveFamily = undefined;
  let fantasyFamily = undefined;
  let monospaceFamily = undefined;

  if (opts && opts.defaultFontFamily) {
    if (opts.defaultFontFamily.serifFamily) {
      serifFamily = opts.defaultFontFamily.serifFamily;
    }

    if (opts.defaultFontFamily.sansSerifFamily) {
      sansSerifFamily = opts.defaultFontFamily.sansSerifFamily;
    }

    if (opts.defaultFontFamily.cursiveFamily) {
      cursiveFamily = opts.defaultFontFamily.cursiveFamily;
    }

    if (opts.defaultFontFamily.fantasyFamily) {
      fantasyFamily = opts.defaultFontFamily.fantasyFamily;
    }

    if (opts.defaultFontFamily.monospaceFamily) {
      monospaceFamily = opts.defaultFontFamily.monospaceFamily;
    }
  }

  converter = createConverter(
    serifFamily,
    sansSerifFamily,
    cursiveFamily,
    fantasyFamily,
    monospaceFamily,
  );

  if (opts && opts.fonts) {
    for (const font of opts.fonts) {
      converter.registerFont(font);
    }
  }

  const svg2png = (svg: string, options?: ConvertOptions) =>
    new Promise<Uint8Array>((resolve, reject) => {
      try {
        let scale = undefined;
        let width = undefined;
        let height = undefined;
        let backgroundColor = undefined;

        if (options) {
          scale = options.scale;
          width = options.width;
          height = options.height;
          backgroundColor = options.backgroundColor;
        }

        if (converter) {
          const result = converter.convert(
            svg,
            scale,
            width,
            height,
            backgroundColor,
          );
          if (result) resolve(result);
        } else throw new Error('Converter already disposed.');
      } catch (e) {
        if (e instanceof Error) reject(e);
        else reject(new Error(`${e}`));
      }
    });
  svg2png.dispose = () => {
    if (converter) {
      converter.free();
      converter = undefined;
    }
  };
  svg2png.getLoadedFontFamilies = () => {
    if (converter) {
      return converter.list_fonts();
    } else {
      return [];
    }
  };

  return svg2png;
};

export const svg2png = (
  svg: string,
  opts?: ConverterOptions & ConvertOptions,
): Promise<Uint8Array> => {
  const convert = createSvg2png(opts);
  return convert(svg, opts).finally(() => convert.dispose());
};

// types re-export
export { ConverterOptions, ConvertOptions, Svg2png };
