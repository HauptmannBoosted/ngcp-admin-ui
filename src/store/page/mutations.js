
export function contextSucceeded (state, {
    resource,
    resourceId,
    resourceExpand,
    resourceRelations,
    resourceObject,
    resourceRelatedObjects = null,
    resourceRelatedSubObjects = null
}) {
    state.resource = resource
    state.resourceId = resourceId
    state.resourceExpand = resourceExpand
    state.resourceRelations = resourceRelations
    state.resourceObject = resourceObject
    state.resourceRelatedObjects = resourceRelatedObjects
    state.resourceRelatedSubObjects = resourceRelatedSubObjects
}

export function resetContext (state) {
    state.resource = null
    state.resourceId = null
    state.resourceExpand = null
    state.resourceRelations = null
    state.resourceObject = null
    state.resourceRelatedObjects = null
    state.resourceRelatedSubObjects = null
}

export function setCurrentSubContext (state, subContextRoute) {
    state.subContextRoute = subContextRoute
}
