# Objectively Funcy

### Setup

* Fork.
* Clone.
* `npm install`
* `npm test`


### Tips

* For `getFullName`, don't set any additional properties on the given object. Just give the caller of the function back a new value based on the first name and last name. (You were probably going to do it that way anyway!)
* For `giveBirthday`, you'll need to have some way to tell if the key `age` is already in the given person. Do a little research!
* Same as above for `divorce`; you'll need to research a way to REMOVE the key `spouseName` from the given people. Simply setting the properties to `undefined` or `null` won't be sufficient; they need to be as if they were never there. (Creepy!)
