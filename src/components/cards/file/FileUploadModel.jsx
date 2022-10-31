import { Button, Card, Modal, message, Upload } from 'antd';
import React, { useState } from 'react';
import {
    CloseCircleOutlined,
    CloudUploadOutlined,
    InboxOutlined,
} from '@ant-design/icons'

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

export default function FileUploadModel() {

    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Button icon={<CloudUploadOutlined />}
                onClick={showModal}
                style={{
                    marginLeft: 20
                }}>Upload Files</Button>
            <Modal
                title="Upload Files"
                open={open}
                onCancel={hideModal}
                okText="Upload"
                width={800}
                okButtonProps={{ icon: <CloudUploadOutlined /> }}
                closeIcon={<CloseCircleOutlined />}
            >
                <Card
                    style={{
                        margin: -22,
                        padding: 0,
                        border: 'none'
                    }}
                >
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </Card>
            </Modal>
        </>
    )
}
