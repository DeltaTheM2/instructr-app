import React from "react";
import {Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Button, Link} from "@nextui-org/react";


const NewLessonForm = ({ isOpen, onOpen, onOpenChange }: { isOpen: any; onOpen: any, onOpenChange: any}) => {
    return (
       <>
        <ModalContent>
            {(onClose) =>(
                <>
                    <ModalHeader className={'flex flex-col gap-1'}>Set up a lesson plan</ModalHeader>
                    <ModalBody>
                        <Input
                            autoFocus
                            label='Course Name'
                            placeholder={'Enter the name'}
                            variant={'bordered'}
                        />
                        <Input
                            label={''}
                        />
                    </ModalBody>
                </>
            )}
        </ModalContent>
       </>
    );
};
export default NewLessonForm;