function importData(entityName, dataSource, idFieldName, dataFieldStruct) {
	console.info("Count items-before: " + dataSource.length);

	var lines = loadText( ds.getModelFolder().path + "Import/" + entityName + ".txt" ).split("\n");
	var columns = [];

	lines.forEach(function(line) {
		columns = line.split("\t");    

		var item = dataSource.find(idFieldName + " = :1", columns[0]);
		if(item == null) {
			item = new dataSource({
				ID: columns[0],
				referencia: columns[1]
			});
			item.save();
		}

	});

	console.info("Count items-after: " + dataSource.length);
}

importData("Proyecto", ds.Proyecto, "ID", null);