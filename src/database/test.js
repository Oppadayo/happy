const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    await saveOrphanage(db, {
        lat: "-15.984235",
        lon: "-48.043104",
        name: "Lar da infancia",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vunerabilidade social.",
        whatsapp: "61999999999",       
        images: [
            "https://images.unsplash.com/photo-1601824772573-1036033c48b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603116854914-c4b5494fe296?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603464178894-ba4f1b5312f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603104085324-f2b1363bf11c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1601807136805-b16d875c26ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "https://images.unsplash.com/photo-1603090067595-c3febef4765f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"
    })

  const allOrphanages =  await db.all(`SELECT * FROM orphanages`) 

  const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = ${id}`)

  await db.run(`DELETE FROM orphanages WHERE id = ${id}`)
})