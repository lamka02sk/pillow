import Core from "./Modules/Core"

module.exports = class {

    constructor(settings = {}) {

        Core.saveSettings(settings);
        Core.dispatch();

        return this;

    }

    setData(data = {}) {

        Core.setData(data);
        return this;

    }

    addData(data = {}) {

        Core.addData(data);
        return this;

    }

    setAPI(settings = {}) {

        Core.setAPI(settings);
        return this;

    }

    refresh() {



    }

    showPage(page = 1) {



    }

    sortBy(parameter, asc = true) {



    }

    destroy(reinitialize = false) {

        Core.destroy(reinitialize);
        return this;

    }

};