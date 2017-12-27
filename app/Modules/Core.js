import Settings from "./Settings";
import Instance from "./Instance";

/**
 * How does this work in a nutshell:
 * ---------------------------------------------------------------------------------------------------------------------
 * 1. Firstly public API class saves Settings with saveSettings() method in this dispatcher
 * 2. Settings instance is saved
 * 3. Then public API class call method dispatch(), which creates instance for each element found
 * 4. Instance class is taking care of anything else under the hood
 * 5. If user changes settings, dispatcher class saves them into current settings instance and call proper hooks
 */

export default {

    settings: null,
    instances: [],

    /**
     * Save or update settings
     * @param settings
     */
    saveSettings(settings = {}) {

        this.settings
            ? this.settings.updateData(settings)
            : this.settings = new Settings(settings);

    },

    /**
     * Dispatch instances for each element found
     * @returns {boolean}
     */
    dispatch() {

        const elements = document.querySelectorAll(this.settings.element);

        if(!elements)
            return false;

        elements.forEach(element => this.createInstance(element));

    },

    /**
     * Create instance for given element and save it
     * @param element
     */
    createInstance(element) {

        this.instances.push(new Instance(this, element));

    },

    /**
     * Destroys each instance created and reinitialize if needed
     * @param reinitialize
     */
    destroy(reinitialize) {

        this.instances.forEach(instance => instance.destroy());

        if(reinitialize)
            this.dispatch();

    }

}