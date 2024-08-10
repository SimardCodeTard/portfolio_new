import './project-preview.css';

import CloseIcon from '@mui/icons-material/Close';

export default function ProjectPreview(props: {
    projectLink: string,
    closeDialog: () => void
}) {
    return <div className="project-preview">
        <div className="project-preview-header w-full flex items-center"><CloseIcon className="cursor-pointer ml-auto" fontSize='large' onClick={props.closeDialog}></CloseIcon></div>
        <iframe src={props.projectLink}></iframe>
    </div>
}