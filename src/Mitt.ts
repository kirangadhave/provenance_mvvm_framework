import { Handler } from "./Handler";

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */

export default function mitt(all?: any) {
  all = all || Object.create(null);

  return {
    on(type: string, handler: Handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type: string, handler: Handler) {
      if (all[type]) all[type].splice(all[type].indexOf(handler) >>> 0, 1);
    },

    emit(type: string, evt: any) {
      (all[type] || []).slice().map((handler: Handler) => {
        handler(evt);
      });
    }
  };
}
