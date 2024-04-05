import React from "react";
import {Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Button, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import WeekdaySelection from "@/app/components/weekdaySelection/weekdaySelection";


const NewLessonForm = ({ isOpen, onOpen, onOpenChange }: { isOpen: any; onOpen: any, onOpenChange: any}) => {
    return (
       <>
           <Modal
               isOpen={isOpen}
               onOpenChange={onOpenChange}
               placement={"bottom"}
               backdrop={"blur"}
               size={'5xl'}
           className={'absolute inset-y-0 bottom-0'}>
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
                                <Textarea
                                    label={'Description'}
                                    size={"lg"}
                                    variant={"bordered"}
                                />
                                <WeekdaySelection></WeekdaySelection>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
           </Modal>
       </>
    );
};
export default NewLessonForm;