<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Symfony\Component\HttpFoundation\Response;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function show(Post $post)
    {
        return $post;
    }

    public function store(Request $request)
    {
        $post = Post::create($request->all());

        return response()->json($post, Response::HTTP_CREATED);
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());


        return response()->json($post, Response::HTTP_ACCEPTED);

    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}



