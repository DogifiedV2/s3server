let removedOutputsENT = [
    'the_vault:crystal_seal_ordinator_build',
    'the_vault:crystal_seal_ordinator_run'
];
onEvent("recipes", event => {
    removedOutputsENT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
})