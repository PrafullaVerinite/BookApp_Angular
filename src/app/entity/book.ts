export class Book {
	bookId!: number;

	bookTitle: String | undefined;

	description!: String;

	bookPrice!: number;

	createdOn!: Date;

	updatedOn!: Date;

	publisherId!: number;

	isDeleted!: boolean;
	
	picByte!: string;

	retrievedImage!: string;
}
