//Busca si hay algún item llamado "mousepad"
db.inventory.find( {item: "mousepad"})

//Hace lo mismo pero con el comando $eq.
db.inventory.find({item: {$eq: "canvas"} } )

//Busca si hay algún valor qty que sea igual a 25.
db.inventory.find({ qty: {$eq: 25} } )

//Busca si hay algun tag que sea igual a "red"
db.inventory.find({ tags:{$eq: "red"} } )
