
// question no 5 

let cache = new Map();

function handleCache(key, value) {
    
    if (!value) {
        if (cache.get(key)) {
            return cache.get(key);
        } else {
            return false;
        }
    } else {
        cache.set(key, value);
        return cache.get(key);
    }

}

// it will create a new object in cache 
handleCache("language", "Javascript");

// it will return the object value if it is existed in cache otherwise it will return false 
let lang = handleCache("language");       
//output will be "Javascript"