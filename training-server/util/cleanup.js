
import db from '../src/db'

// synchronize the sequelize mode with postgres (and alters the database if needed)
console.log('Attention : db schema recreate started...');
db.sequelize.sync({ force: true, logging: console.log })
    .then(() => {
        console.log('performing basic ETL');
        runBasicETL();
        console.log('done');
    })
    .catch(err => {
        console.log("err: ", err)
    })
console.log("done")


// run some basic ETL
const runBasicETL = async () => {

    console.log("creating user")
    await db.userrole.destroy({
        where: {},
        truncate: false,
        cascade: true
    })

    await db.user.destroy({
        where: {},
        truncate: false,
        cascade: true
    })

    await db.course.destroy({
        where: {},
        truncate: false,
        cascade: true
    })

    await db.role.destroy({
        where: {},
        truncate: false,
        cascade: true
    })

    // create two example orgs
    // let supportOrg = await db.org.create({
    //     name: 'Support',
    // });

    // let salesOrg = await db.org.create({
    //     name: 'Sales',
    // });

    // create two example users
    let sleve = await db.user.create({
        serial: '000001',
        firstName: 'Sleve',
        lastName: 'McDicheal',
        password: 'dumb',
        email: '@gmail.com'
    });

    let bobson = await db.user.create({
        serial: '000002',
        firstName: 'Bobson',
        lastName: 'Dugnutt',
        password: 'dumb',
        email: '@gmail.com'
    });

    // create three example roles
    let smeRole = await db.role.create({
        name: 'SME',
    });

    let adminRole = await db.role.create({
        name: 'Admin',
    });

    let employeeRole = await db.role.create({
        name: 'Employee',
    });

    // finally create the role for sleve (support) and the roles for bobson
    await db.userrole.create({
        userId: sleve.id,
        roleId: smeRole.id 
    });

    await db.userrole.create({
        userId: bobson.id,
        roleId: adminRole.id 
    });
    await db.userrole.create({
        userId: bobson.id,
        roleId: employeeRole.id 
    });
}

