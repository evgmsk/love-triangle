/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let love_triangles = 0;
    let _preferences = [...preferences];
    const findLoveTriangle = i => {
        if(_preferences[i]){
            let second_amorous = _preferences[i] - 1;
            let third_amorous = [_preferences[second_amorous] - 1];
            if(i < second_amorous && i !== third_amorous &&
                _preferences[third_amorous] === i + 1) {
                ++love_triangles;
                _preferences[second_amorous] = 0;
                _preferences[third_amorous] = 0;
            }
        }
        return(i < (_preferences.length - 3))?
            findLoveTriangle(i + 1):
            love_triangles
    };
    return findLoveTriangle(0);
};
