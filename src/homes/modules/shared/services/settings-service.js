class SettingsService extends Endpoint.Service {
  constructor(cache) {
    super();
    this.cache = cache;
  }
  /**
   * {@inheritDoc}
   */
  boot() {
    this.setRoute("/settings");
    this.cacheMap = {
      list: "generalSettings"
    };
  }

  get live() {
    this.liveData = true;
    return this;
  }

  cached(methodName, ...args) {
    return new Promise((resolve, reject) => {
      let cacheKey =
        this.cacheMap[methodName] ||
        (this.path + "-" + methodName).ltrim("/").replace(/\//g, "-");
      if (!this.cache.has(cacheKey)) {
        this[methodName](...args).then(response => {
          this.cache.set(cacheKey, response);
          resolve(response);
        });
      } else {
        resolve(this.cache.get(cacheKey));
      }
    });
  }

  list() {
    let cacheKey = this.cacheMap["list"];
    return new Promise((resolve, reject) => {
      if (!this.cache.has(cacheKey)) {
        super.list().then(response => {
          this.cache.set(cacheKey, response.body);
          resolve(response.body);
        });
      } else {
        resolve(this.cache.get(cacheKey));
      }
    });
  }
}

DI.register({
  class: SettingsService,
  alias: "settingsService"
});
