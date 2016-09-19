export function contains(value, ref, type) {
    switch (type) {
        case 'filter':
            if (value.indexOf(ref) > -1) return value
            break
        case 'hint':
            if (ref && ref != '') {
                let re = new RegExp('(' + ref + ')', "g");
                return value.replace(re, '<span class="yellow">$1</span>');
            } else
                return value
            break
        default:
            break
    }
}
