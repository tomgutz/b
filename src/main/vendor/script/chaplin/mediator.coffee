define [
  'underscore'
  'backbone'
  'cs!chaplin/lib/support'
  'cs!chaplin/lib/utils'
], (_, Backbone, support, utils) ->
  'use strict'

  # Mediator
  # --------

  # The mediator is a simple object all others modules use to communicate
  # with each other. It implements the Publish/Subscribe pattern.
  #
  # Additionally, it holds objects which need to be shared between modules.
  # In this case, a `user` property is created for getting the user object
  # and a `setUser` method for setting the user.
  #
  # This module returns the singleton object. This is the
  # application-wide mediator you might load into modules
  # which need to talk to other modules using Publish/Subscribe.

  # Start with a simple object
  mediator = {}

  # Publish / Subscribe
  # -------------------

  # Mixin event methods from Backbone.Events,
  # create Publish/Subscribe aliases
  mediator.subscribe   = mediator.on      = Backbone.Events.on
  mediator.unsubscribe = mediator.off     = Backbone.Events.off
  mediator.publish     = mediator.trigger = Backbone.Events.trigger

  # Initialize an empty callback list so we might seal the mediator later
  mediator._callbacks = null

  # Make properties readonly
  utils.readonly mediator,
    'subscribe', 'unsubscribe', 'publish',
    'on', 'off', 'trigger'

  # Sealing the mediator
  # --------------------

  # After adding all needed properties, you should seal the mediator
  # using this method
  mediator.seal = ->
    # Prevent extensions and make all properties non-configurable
    if support.propertyDescriptors and Object.seal
      Object.seal mediator

  # Make the method readonly
  utils.readonly mediator, 'seal'

  # Return our creation
  mediator
