/* tslint:disable */
/* eslint-disable */
/**
* @param {string | undefined} default_serif_family
* @param {string | undefined} default_sans_serif_family
* @param {string | undefined} default_cursive_family
* @param {string | undefined} default_fantasy_family
* @param {string | undefined} default_monospace_family
* @returns {Converter}
*/
export function createConverter(default_serif_family?: string, default_sans_serif_family?: string, default_cursive_family?: string, default_fantasy_family?: string, default_monospace_family?: string): Converter;
/**
*/
export function initialize(): void;
/**
*/
export class Converter {
  free(): void;
/**
* @param {Uint8Array} font
*/
  registerFont(font: Uint8Array): void;
/**
* @param {string} svg
* @param {number | undefined} scale
* @param {number | undefined} width
* @param {number | undefined} height
* @param {string | undefined} background
* @returns {Uint8Array}
*/
  convert(svg: string, scale?: number, width?: number, height?: number, background?: string): Uint8Array;
/**
* @returns {any[]}
*/
  list_fonts(): any[];
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_converter_free: (a: number) => void;
  readonly converter_registerFont: (a: number, b: number, c: number) => void;
  readonly converter_convert: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => void;
  readonly converter_list_fonts: (a: number, b: number) => void;
  readonly createConverter: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => number;
  readonly initialize: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
