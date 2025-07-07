let removedOutputsENT = [
    "entangled:block",
    "entangled:item"
];
onEvent("recipes", event => {
    removedOutputsENT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
})