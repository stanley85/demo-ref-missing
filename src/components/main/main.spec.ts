import { newSpecPage } from '@stencil/core/testing';
import {AppMain} from "./main";

describe('app-main', () => {
  it('should be able to trigger method via click without arrow delegate', async () => {
    const page = await newSpecPage({
      components: [AppMain],
      html: `<app-main></app-main>`,
    });
    const button = page.root.shadowRoot.querySelectorAll('button');

    /**
     * Test runs if only button[0] is clicked
     */
    button[0].click();

    /**
     * /Dev/demo-ref-missing/src/components/main/main.tsx:10
     *        await this.appContentWrapperRef.toggle();
     *                                       ^
     *
     * TypeError: this.appContentWrapperRef.toggle is not a function
     *     at MockButtonElement.AppMain.methodCallDelegate (/Dev/demo-ref-missing/src/components/main/main.tsx:10:39)
     *     at /Dev/demo-ref-missing/node_modules/@stencil/core/mock-doc/index.cjs:730:26
     *     at Array.forEach (<anonymous>)
     *     at triggerEventListener (/Dev/demo-ref-missing/node_modules/@stencil/core/mock-doc/index.cjs:728:15)
     *     at dispatchEvent (/Dev/demo-ref-missing/node_modules/@stencil/core/mock-doc/index.cjs:749:3)
     *     at MockButtonElement.click (/Dev/demo-ref-missing/node_modules/@stencil/core/mock-doc/index.cjs:1637:5)
     *     at Object.<anonymous> (/Dev/demo-ref-missing/src/components/main/main.spec.ts:20:15)
     *     at processTicksAndRejections (node:internal/process/task_queues:95:5)
     *
     * Node.js v18.0.0
     */
    button[1].click();

    /**
     * Green test if nothing breaks
     */
    expect(true).toBeTruthy();
  });
});
