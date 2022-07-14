import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            console.log(fields, files)
            // console.log(files.file.filepath)
            var oldPath = files.file.filepath;
            var newPath = `./public/uploads/${fields.randomno}_${files.file.originalFilename.replace(/\s/g, '')}`;
            mv(oldPath, newPath, function(err) {
            });
            // var oldPath = files.file2.filepath;
            // var newPath = `./public/uploads/${files.file2.originalFilename.replace(/\s/g, '')}`;
            // mv(oldPath, newPath, function(err) {
            // });
            res.status(200).json({ fields, files })
        })
    })
    
}
