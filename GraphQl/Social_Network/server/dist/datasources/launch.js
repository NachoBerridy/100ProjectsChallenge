import Sequelize from "sequelize";
import sequelize from "./connection.js";
sequelize
    .authenticate()
    .then(() => {
    console.log('Database connected');
})
    .catch((err) => {
    console.log('Unable to connect ', err);
});
const Users = sequelize.define('Users', {
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    age: { type: Sequelize.NUMBER },
    phone: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING }
});
export { Users };
