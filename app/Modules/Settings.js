export default class {

    constructor(settings = {}) {

        const keys = Object.keys(settings);
        this.setDefaults();

        keys.forEach(key => this[key] = settings[key]);

    }

    updateData(settings) {
        Object.keys(settings).forEach(key => this[key] = settings[key]);
    }

    setDefaults() {

        this.locale = {
            'pillow-collapse': 'Collapse',
            'pillow-collapse.open': 'Expand',
            'pillow-collapse-text': 'Hide content',
            'pillow-collapse-text.open': 'Show content',
            'pillow-filters-empty': 'No filters specified',
            'pillow-filters-clear': 'Reset filters',
            'pillow-filters-collapse': 'Collapse filters',
            'pillow-filters-collapse.open': 'Expand filters',
            'pillow-filter-collapse-text': 'Hide filters',
            'pillow-filter-collapse-text.open': 'Show filters'
        };

        this.element = 'pillow-listing';
        this.instanceAttributes = {};
        this.autoRefresh = true;

        this.search = true;
        this.indexing = true;
        this.indexAllText = true;
        this.indexAttributes = [];
        this.typeToFind = true;
        this.autoReindex = true;

        this.filter = true;
        this.filterIndexing = true;
        this.filterProperties = [];
        this.sortBy = false;

        this.showHeader = false;
        this.instanceName = 'pillow';
        this.headerUrl = false;
        this.enableCollapse = false;

        this.itemTemplate = false;
        this.data = {};
        this.addLinks = false;
        this.mapData = {
            item: {
                pairs: true,
                link: true
            }
        };

        this.paginate = true;
        this.itemsNumber = 10;
        this.showPages = 5;

        this.api = false;
        this.apiUrl = '';
        this.apiKey = '';
        this.apiMethod = 'GET';
        this.apiData = {};
        this.apiParameters = {};
        this.apiProcess = true;
        this.apiParseResponse = () => {};

        this.onRefresh = () => {};
        this.onCreate = () => {};
        this.onFilter = () => {};
        this.onDestroy = () => {};
        this.onSearch = () => {};
        this.onAPICall = () => {};
        this.onSort = () => {};
        this.onClick = () => {};
        this.onAdd = () => {};
        this.onRemove = () => {};
        this.onChange = () => {};
        this.onHover = () => {};

    }

}