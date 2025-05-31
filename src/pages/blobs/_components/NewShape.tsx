import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import ShapePreview from './ShapePreview.tsx';
import { generateBlob, uploadDisabled } from '../../../utils';
import type { BlobProps } from '../../../types.ts';

interface Props {
    setLastMutationTime?: Dispatch<SetStateAction<number>>;
}

export default function NewShape(props: Props) {
    const { setLastMutationTime } = props;
    const [blobData, setBlobData] = useState<BlobProps>();
    const [wasUploaded, setWasUploaded] = useState<boolean>(false);

    const randomizeBlob = () => {
        setBlobData(generateBlob());
        setWasUploaded(false);
    };

    // const defaultData = {
    //     "name": "defaultData",
    //     "data": {
    //         "aa": 111
    //     }
    // };
    const [formData, setFormData] = useState<FormData>({
        name: '',
        data: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
        });
    };
    const uploadBlob = async () => {
        // let defaultData={
        //     name:'defaultData',
        //     data:document.getElementById('jsonContent')
        // }
        const response = await fetch('/api/blobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.message) {
            console.log(data.message);
        }
        setWasUploaded(true);
        setLastMutationTime(Date.now());
    };

    useEffect(() => {
        if (!blobData) {
            randomizeBlob();
        }
    }, [blobData]);

    return (
        <>
            {/* <h2 className="mb-4 text-xl text-center sm:text-xl">New Random Shape2</h2>
            <div className="w-full mb-6 bg-white rounded-lg">
                <div className="p-4 text-center text-gray-900 border-b border-gray-200 min-h-14">{blobData && <span>{blobData.parameters?.name}</span>}</div>
                <div className="p-4 aspect-square text-primary">{blobData && <ShapePreview {...blobData} />}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn" onClick={randomizeBlob}>
                    Randomize
                </button>
                <button className="btn" onClick={uploadBlob} disabled={uploadDisabled || wasUploaded || !blobData}>
                    Upload
                </button>
            </div> */}
            <div className="container">
                <h1>JSON 文件管理 (Netlify Blobs)</h1>

                <div className="form-group">
                    <label htmlFor="name">文件名:</label>
                    <input type="text" id="name" name="name" placeholder="example.json" value={formData.name}  />
                </div>
                <div className="form-group">
                    <label htmlFor="data">JSON 内容:</label>
                    <textarea id="data" name="data" placeholder='{"key": "value"}' value={formData.data} ></textarea>
                </div>

                <div className="actions">
                    {/* <button >加载文件</button> */}
                    <button onClick={uploadBlob} >保存文件</button>
                    {/* <button >删除文件</button> */}
                </div>

                <div id="message"></div>
            </div>
        </>
    );
}
