import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/app/models/project';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import PreviewIcon from '@mui/icons-material/Preview';
import { useState } from 'react';
import { Dialog, useMediaQuery, useTheme } from '@mui/material';
import ProjectPreview from '@/app/project-preview/project-preview';

export default function ProjectItem (props : Project) {
    const theme = useTheme();
    const fullScr/een = useMediaQuery(theme.breakpoints.down('md'));

    const [previewDialogOpen, setPreviewDialogOpen] = useState(false);

    const openProjectPreview = () => {
        props.deploymentLink && setPreviewDialogOpen(true);
    }

    const closeProjectPreview = () => {
        setPreviewDialogOpen(false);
    }

    return <div className='project-item min-w-3/4 mx-6'>
        <h3> {props.name} </h3>
        <div className='flex project-item-body'>
            <Image loading='eager' src={props.imagePath} alt='' width={300} height={300} />
            <div className='project-item-main flex flex-col p-4 w-full justify-between'>
                <p className="project-item-description overflow-y-scroll"> {props.description} </p>
                <div className='project-item-footer flex items-center w-full space-x-2 p-2 mt-auto'>
                    {props.techStack.map((tech, key) => 
                        <Image loading='eager' className='tech-icon aspect-auto' key={key} alt={tech.label} src={`tech-icons/${tech.icon}`} width={30} height={30}/>
                    )}
                    <div className="project-links space-x-2">
                        {props.deploymentLink ? <>
                            <PreviewIcon fontSize='large' onClick={openProjectPreview}></PreviewIcon> 
                            <Link href={props.deploymentLink}><InsertLinkIcon fontSize='large'></InsertLinkIcon></Link> 
                        </>
                        : <></>}
                        <Link href={props.repoLink}><GitHubIcon fontSize='large'/></Link>
                    </div>
                </div>
            </div>
        </div>
        <Dialog
            fullScreen={fullScreen}
            maxWidth={"xl"}
            open={previewDialogOpen}
            onClose={closeProjectPreview}
        > { props.deploymentLink ? <ProjectPreview projectLink={props.deploymentLink} closeDialog={closeProjectPreview}></ProjectPreview> : <></> }
        </Dialog>
    </div>
}