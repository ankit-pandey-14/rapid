export const resetValuesForFileFields = (filedList=[]) => {
    filedList.forEach((element) => {
        if(element.type === 'file') {
            const elementId = element?.id;
            document.getElementById(elementId).value = ''
        }
    });
}