//PUT
// Clients use the PUT method to set up an entity of a resource into an HTTP server. 
// This setup process, in turn, can occur in two forms:
// The entity doesn’t exist, and the server creates a new entity for the 
// requested resource and responds with a success code 201 to the client
// The entity already exists; the server updates the entity and responds 
// with a success code 200 or 204 to the client. Furthermore, 
// if an error happens while processing a PUT request, the server should respond to the client
//  with the proper error code, typically a 4xx or 5xx

//Patch
// The PATCH method applies partial modifications to entities of a resource.
// The PATCH method executes the requested changes atomically.
// It means that if the server can’t satisfy all the requested changes, 
// it doesn’t modify the target entity. In such a way, if the request is successfully executed,
// the server returns the success code 204 to the client. Otherwise, the server returns an error code

//  However, PUT is idempotent by definition. So, PUT is a more fault-tolerant option than PATCH,
//   making it a better choice in the considered case.
// Using PATCH has some advantages over using PUT for updating resources. 
// First, it can reduce the amount of data that needs to be transferred between the client 
// and the server, which can improve the performance and efficiency of the web application. 
// Second, it can avoid overwriting or losing data that may have been changed by another client
//  or process, since it only modifies the fields that are specified in the request. 
//  Third, it can allow more flexibility and granularity in updating resources, 
//  since it can support different types of patch formats, such as JSON Patch or JSON Merge Patch.