import { FileType } from "./FileType";

/**
 * Response from uploading a file
*
* @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload#response-code-and-structure-json}
*/
export interface UploadResponse {
	/**
		* Unique fileId. Store this fileld in your database, as this will be used to perform update action on this file.
	*/
	fileId: string;
	/**
		* The name of the uploaded file.
	*/
	name: string;
	/**
		* The URL of the file.
	*/
	url: string;
	/**
		* In case of an image, a small thumbnail URL.
	*/
	thumbnailUrl: string;
	/**
		* Height of the uploaded image file. Only applicable when file type is image.
	*/
	height: number;
	/**
	 * Width of the uploaded image file. Only applicable when file type is image.
	 */
	width: number;
	/**
	 * Size of the uploaded file in bytes.
	 */
	size: number;
	/**
	 * Type of file. It can either be image or non-image.
	 */
	fileType: FileType;
	/**
	 * The path of the file uploaded. It includes any folder that you specified while uploading.
	 */
	filePath: string;
	/**
	 * Array of tags associated with the image.
	 */
	tags?: string[];
	/**
	 * Is the file marked as private. It can be either true or false.
	 */
	isPrivateFile: boolean;
	/**
	 * Value of custom coordinates associated with the image in format x,y,width,height.
	 */
	customCoordinates: string | null;
	/**
	 * The metadata of the upload file. Use responseFields property in request to get the metadata returned in response of upload API.
	 */
	metadata?: string;
}