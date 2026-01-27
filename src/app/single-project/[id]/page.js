import Image from 'next/image'
import React from 'react'
import { projectsData } from '@/utlits/fackData/projectData'
import InfiniteCarousel from '@/components/InfiniteCarousel'

// Generar rutas estáticas en build time
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id.toString(),
    }))
}

// Content Section Renderer
const ContentSection = ({ section }) => {
    switch (section.type) {
        case 'heading':
            const HeadingTag = `h${section.level}`;
            return <HeadingTag className="mb-20">{section.text}</HeadingTag>;

        case 'paragraph':
            return <p className="mb-20">{section.text}</p>;

        case 'image':
            return (
                <div className="content-image mb-30">
                    <Image
                        width={1200}
                        height={800}
                        sizes="100%"
                        style={{width:"100%", height:"auto", objectFit:"contain", borderRadius: "16px"}}
                        src={section.src}
                        alt={section.alt}
                    />
                </div>
            );

        case 'image-with-caption':
            return (
                <figure className="content-image-with-caption mb-30">
                    <Image
                        width={1200}
                        height={800}
                        sizes="100%"
                        style={{width:"100%", height:"auto", objectFit:"contain", borderRadius: "16px"}}
                        src={section.src}
                        alt={section.alt}
                    />
                    <figcaption className="mt-10" style={{fontSize: "14px", opacity: 0.7}}>
                        {section.caption}
                    </figcaption>
                </figure>
            );

        case 'list':
            return (
                <ul className="content-list mb-20" style={{paddingLeft: "20px"}}>
                    {section.items.map((item, index) => (
                        <li key={index} style={{marginBottom: "8px"}}>{item}</li>
                    ))}
                </ul>
            );

        case 'carousel':
            return <InfiniteCarousel images={section.images} />;

        default:
            return null;
    }
}

const SingleProject = ({ params }) => {
    const projectId = parseInt(params.id)
    const project = projectsData.find(p => p.id === projectId)

    // Manejar proyecto no encontrado
    if (!project) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-5">
                        <h1>Proyecto no encontrado</h1>
                        <p>El proyecto que buscas no existe.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="single-project-page-design">
            {/* Title Section */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>{project.subtitle}</p>
                        <h1 className="mb-30">{project.title}</h1>
                    </div>
                </div>
            </div>

            {/* Cover Image - CONTAINED */}
            <div className="container mb-40">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-cover-image container-inner">
                            <Image
                                width={1200}
                                height={600}
                                sizes='100vw'
                                style={{width:"100%", height:"auto", borderRadius: "16px"}}
                                src={project.coverImage || project.mainImage}
                                alt={project.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{project.year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{project.client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{project.services}</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>{project.projectType}</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            {project.contentSections ? (
                                project.contentSections.map((section, index) => (
                                    <ContentSection key={index} section={section} />
                                ))
                            ) : (
                                // FALLBACK para proyectos sin contentSections
                                <>
                                    <h2 className="mb-20">Description</h2>
                                    {project.description?.map((paragraph, index) => (
                                        <p key={index} className="mb-20">{paragraph}</p>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>

                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="row pt-30">
                        {project.galleryImages.map((image, index) => (
                            <div key={index} className="col-lg-6">
                                <div className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                                    <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={image} alt={`${project.title} gallery ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject
