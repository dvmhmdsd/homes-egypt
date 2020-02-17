function propertyUrl(property) {
    return `/property/${ property.old_id }/${seo(property.name)}`;
}