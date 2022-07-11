const express = require('express');
const app = express();
const cors = require('cors');
const admZip = require('adm-zip');
const bodyparser = require('body-parser');
require('dotenv').config({path: '.env'})

const userRoutes = require('./src/routes/users.routes');
const classRoutes = require('./src/routes/class.routes');
const studentRoutes = require('./src/routes/student.routes');
const matiereRoutes = require('./src/routes/matiere.routes');
const teachersRoutes = require('./src/routes/teachers.routes');
const downloadRoutes = require('./src/routes/download.routes');
const seqRoutes = require('./src/routes/seq.routes');
const sendRoutes = require('./src/routes/send.routes');
const settingsRoutes = require('./src/routes/settings.routes');
const trimRoutes = require('./src/routes/trim.routes');
const comRoutes = require('./src/routes/com.routes');
const notesRoutes = require('./src/routes/notes.routes');
const uploadRoutes = require('./src/routes/upload.routes');
const sectionRoutes = require('./src/routes/section.routes');

app.use(bodyparser.json());
app.use(
    cors(
        {
            origin: '*'
        }
    )
)
app.use('/users', userRoutes)
app.use('/class', classRoutes)
app.use('/students', studentRoutes)
app.use('/teachers', teachersRoutes)
app.use('/matiere', matiereRoutes)
app.use('/download', downloadRoutes)
app.use('/seq', seqRoutes);
app.use('/trim', trimRoutes);
app.use('/com', comRoutes);
app.use('/notes', notesRoutes);
app.use('/settings', settingsRoutes)
app.use('/send', sendRoutes);
app.use('/upload', uploadRoutes);
app.use('/sections', sectionRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listenning on ${process.env.PORT}`);
})