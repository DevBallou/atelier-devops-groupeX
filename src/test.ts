// This file is required by karma and loads recursively all the .spec.ts files
import 'zone.js';
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

try {
  if (typeof require === 'function' && typeof require.context === 'function') {
    const context = require.context('./', true, /\.spec\.ts$/);
    context.keys().map(context);
  }
} catch (e) {
  // Bundlers without require.context (esbuild) will skip dynamic spec loading.
}
