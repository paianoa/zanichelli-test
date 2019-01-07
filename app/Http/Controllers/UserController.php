<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use JWTAuthException;


/**
 * @OA\Info(
 *     title="API for Zanichelli Test",
 *     description="Sample Api Application",
 *     version="0.1",
 *     termsOfService="http://localhost:8000/terms/",
 *     @OA\Contact(
 *         email="andrea.paiani@gmail.com"
 *     ),
 *     @OA\License(
 *         name="Apache 2.0",
 *         url="http://www.apache.org/licenses/LICENSE-2.0.html"
 *     )
 * )
 *
 * @OA\Server(
 *   url= "http://localhost:8000/",
 *   description= "Local server web built-in Laravel framework"
 *     )
 *
 * */


class UserController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @queryParam user_id int required The id of the user. Example: 9
     * @queryParam room_id string The id of the room.
     * @bodyParam forever boolean Whether to ban the user forever. Example: false
     *
     * @return \Illuminate\Http\Response
     ** @param Request $request
     * @return Response
     *
     **/


    /**
     * @OA\Get(
     *      path="/users",
     *      summary="Get a listing of the Users.",
     *      description="Get all Users",
     *     @OA\Response(
     *         response=200,
     *         description="successful operation",
     *         @OA\JsonContent(
     *              @OA\Property(
     *                  property="code",
     *                  type="integer"
     *              ),
     *              @OA\Property(
     *                  property="message",
     *                  type="string"
     *              ),
     *              @OA\Property(
     *                  property="data",
     *                  type="array",
     *                  @OA\Items(ref="#/components/schemas/User")
     *              )
     *
     *          )
     *
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="server error",
     *       )
     * )
     **/
    public function index()
    {
        try {
            $items = User::all();

            return response()->json(['code' => 200, 'message' => 'success', 'data' => $items]);


        } catch (\Exception $e) {
            return response()->json('', 500);
        }


    }

    /**
     * @OA\Post(path="/users",
     *   summary="Create user",
     *   description="Create new user",
     *   operationId="createUser",
     *   @OA\RequestBody(
     *       required=true,
     *       description="User data",
     *       @OA\MediaType(
     *           mediaType="application/json",
     *           @OA\Schema(ref="#/components/schemas/User")
     *       )
     *   ),
     *    @OA\Response(
     *         response=200,
     *         description="Successfully created",
     *         @OA\JsonContent(
     *              @OA\Property(
     *                  property="code",
     *                  type="integer"
     *              ),
     *              @OA\Property(
     *                  property="message",
     *                  type="string"
     *              ),
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                  @OA\Items(ref="#/components/schemas/User")
     *              )
     *          )
     *
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="bad request"
     *       ),
     *      @OA\Response(
     *         response=500,
     *         description="server error"
     *       )
     * )
     */
    public function store(Request $request)
    {

        if (!$request->exists('name') ||
            !$request->exists('email') ||
            !$request->exists('password')) {
            return response()->json('', 400);
        }
        $user = new User([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ]);
        if ($user->save()) {
            return response()->json(['code' => 200, 'message' => 'Successfully created', 'data' => $user]);

        }
        return response()->json('', 500);

    }

    /**
     * @OA\Get(
     *      path="/users/{id}",
     *      summary="Get resource.",
     *      description="Get resource with id id",
     *     @OA\Parameter(
     *           name="id",
     *           in="path",
     *           description="id of the user to be retrieved",
     *          required=true,
     *          @OA\Schema(
     *                 type="string"
     *            )
     *      ),
     *     @OA\Response(
     *         response=200,
     *         description="Successfully Retrieved",
     *         @OA\JsonContent(
     *              @OA\Property(
     *                  property="code",
     *                  type="integer"
     *              ),
     *              @OA\Property(
     *                  property="message",
     *                  type="string"
     *              ),
     *              @OA\Property(
     *                  property="data",
     *                  type="array",
     *                  @OA\Items(ref="#/components/schemas/User")
     *              )
     *
     *          )
     *
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="resource not found",
     *       )
     * )
     *
     */
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json('', 404);
        }

        return response()->json(['code' => 200, 'message' => 'Successfully Retrieved', 'data' => $user]);
    }


    /**
     * @OA\Patch(path="/users/{id}",
     *   summary="Update user",
     *   description="Update existing user",
     *   @OA\RequestBody(
     *       required=true,
     *       description="User data",
     *       @OA\MediaType(
     *           mediaType="application/json",
     *           @OA\Schema(ref="#/components/schemas/User")
     *       )
     *   ),
     *    @OA\Response(
     *         response=200,
     *         description="Successfully Updated",
     *         @OA\JsonContent(
     *              @OA\Property(
     *                  property="code",
     *                  type="integer"
     *              ),
     *              @OA\Property(
     *                  property="message",
     *                  type="string"
     *              ),
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                  @OA\Items(ref="#/components/schemas/User")
     *              )
     *          )
     *
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="bad request"
     *       ),
     *      @OA\Response(
     *         response=500,
     *         description="server error"
     *       )
     * )
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json('', 404);
        }

        if (!$request->exists('name') ||
            !$request->exists('email') ||
            !$request->exists('password')) {
            return response()->json('', 400);
        }

        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = $request->get('password');

        if ($user->save()) {
            return response()->json(['code' => 200, 'message' => 'Successfully Updated', 'data' => $user]);

        }
        return response()->json('', 500);

    }

    /**
     * @OA\Delete(
     *      path="/users/{id}",
     *      summary="Remove the specified User from storage",
     *      description="Delete User",
     *      @OA\Parameter(
     *          name="id",
     *          description="id of User to delete",

     *          required=true,
     *          in="path",
    *            @OA\Schema(
     *                 type="integer"
     *            )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="successful operation",
     *          @OA\Schema(
     *              type="object",
     *              @OA\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @OA\Property(
     *                  property="data",
     *                  type="string"
     *              ),
     *              @OA\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      ),
     *      @OA\Response(
     *         response=404,
     *         description="resource not found",
     *       ),
     *       @OA\Response(
     *         response=500,
     *         description="server error",
     *       )
     * )
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json('', 404);
        }


        if ($user->delete()) {
            return response()->json(['code' => 200, 'message' => 'Successfully Deleted', 'data' => $user]);

        }

        return response()->json('', 500);
    }
}